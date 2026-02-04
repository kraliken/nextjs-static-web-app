import { connectToDatabase } from "@/database/connection/mongoose"
import { User } from "@/database/models/User"

function normalizeTokenState(userDoc) {
    const limit = Number(userDoc?.tokenLimit ?? 50000);
    const used = Number(userDoc?.tokensUsed ?? 0);
    const remaining = Math.max(0, limit - used);
    return { limit, used, remaining };
}

function toUserDto(user) {
    if (!user?._id) {
        throw new Error("Invalid user: missing _id");
    }

    const token = normalizeTokenState(user);

    return {
        id: String(user._id),
        name: user.name ?? "",
        email: user.email ?? "",
        status: user.status ?? "active",
        role: user.role ?? "user",
        mustChangePassword: user.mustChangePassword ?? true,
        passwordChangedAt: user.passwordChangedAt instanceof Date
            ? user.passwordChangedAt.toISOString()
            : (user.passwordChangedAt ? String(user.passwordChangedAt) : null),
        createdAt: user.createdAt instanceof Date
            ? user.createdAt.toISOString()
            : String(user.createdAt),
        updatedAt: user.updatedAt instanceof Date
            ? user.updatedAt.toISOString()
            : String(user.updatedAt),
        tokenLimit: token.limit,
        tokensUsed: token.used,
        tokensRemaining: token.remaining,
    };
}

function toUserDtos(users) {
    if (!Array.isArray(users)) {
        throw new Error("users must be an array");
    }

    return users.map(toUserDto);
}
export async function getUsers() {

    // const delay = Math.random() * 5000 + 5000; // 5-10 sec
    // await new Promise(resolve => setTimeout(resolve, delay));

    try {
        await connectToDatabase()

        const users = await User.find()

        return { ok: true, data: toUserDtos(users) }
    } catch (error) {
        console.error("get users error", error)
        return { ok: false, error: "Felhasználók lekérdezése sikertelen.", data: [] }
    }

}