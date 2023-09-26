import { UserButton } from "@clerk/nextjs"

function SetupPage() {
  return (
    <div className="p-4">
      <p>Hello Dashboard</p>
      <UserButton afterSignOutUrl="/" />

    </div>
  )
}
export default SetupPage
