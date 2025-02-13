import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link href={"/admin"}>Admin Panel</Link>
    </div>
  )
}

export default page