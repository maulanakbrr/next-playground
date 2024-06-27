'use client'

import FirebaseForm from "./firebaseForm"
import Link from "next/link"

const FirebaseWrapper:React.FC = () => {
  

  return (
    <div className="flex h-full">
      <div className="w-1/2 h-auto px-8 flex items-center justify-center">
        <Link href='/user'>See User List</Link>
      </div>
      <div className="w-1/2 h-auto px-8 flex items-center justify-center">
        <FirebaseForm/>
      </div>
    </div>
  )
}

export default FirebaseWrapper