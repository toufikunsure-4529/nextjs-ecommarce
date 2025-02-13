"use client";

import React from "react";
import { Menu, Bell, UserCircle } from "lucide-react";

export default function AdminHeader() {
    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-end">
            {/* Admin Actions */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-black">
                    <Bell size={24} />
                </button>
                <button className="text-gray-600 hover:text-black">
                    <UserCircle size={24} />
                </button>
            </div>
        </header>
    );
}
