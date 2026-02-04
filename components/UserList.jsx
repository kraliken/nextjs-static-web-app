import { getUsers } from '@/actions/user'
import { Item, ItemContent } from "@/components/ui/item";


const UserList = async () => {
    await new Promise(r => setTimeout(r, 5000));
    const { data } = await getUsers()
    return (
        <>
            {data.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">Nincsenek felhasználók</p>
            ) : (
                data.map((user) => (
                    <Item key={user.id} variant="muted" className="flex items-start gap-12">
                        <ItemContent className="gap-6">
                            {user.name}
                        </ItemContent>
                    </Item>
                    // <UserListItem key={user.id} user={user} currentUserId={currentUserId} />
                ))
            )}</>
    )
}

export default UserList