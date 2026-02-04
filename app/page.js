// import { getUsers } from "@/actions/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Item, ItemContent } from "@/components/ui/item";
import UserList from "@/components/UserList";
import { Suspense } from "react";


export default function Home() {

    // const { data } = await getUsers()

    // console.log(data);

    return (
        <main className="p-4">
            <div className='flex flex-col gap-4 pb-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Aktív felhasználók listája</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Suspense fallback={<p>Loading users...</p>}>
                            <UserList />
                        </Suspense>
                        {/* {data.length === 0 ? (
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
                        )} */}
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
