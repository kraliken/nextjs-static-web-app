import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="w-full p-6">
            {/* Header */}
            <div className="mb-6">
                <Skeleton className="h-6 w-48 mb-4" />
            </div>

            {/* User List Items - 4 skeleton items */}
            <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-700 bg-gray-900">
                        {/* Avatar circle */}
                        {/* <Skeleton className="h-10 w-10 rounded-full shrink-0" /> */}

                        {/* User info */}
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-32" />
                            {/* <Skeleton className="h-3 w-24" /> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
