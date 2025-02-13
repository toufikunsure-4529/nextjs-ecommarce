'use client';

import React, { useState } from 'react';

const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Inactive" },
    { id: 3, name: "Alice Brown", email: "alice@example.com", phone: "456-789-0123", status: "Active" },
];

function AdminCustomers() {
    const [search, setSearch] = useState("");

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto">
            <div className="sm:flex sm:items-center mb-8">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Manage your customer accounts and view their details
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <div className="relative rounded-md shadow-sm">
                        <input
                            type="text"
                            placeholder="Search customers..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="block w-72 rounded-md border-0 py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Email
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Phone
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {filteredCustomers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    #{customer.id}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                    {customer.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                    {customer.email}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                    {customer.phone}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${customer.status === "Active" 
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"}`}>
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {filteredCustomers.length === 0 && (
                            <tr>
                                <td colSpan={5} className="py-8 text-center">
                                    <div className="text-gray-500 text-sm">No customers found matching your criteria</div>
                                    <div className="mt-1 text-gray-400 text-xs">Try adjusting your search terms</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminCustomers;