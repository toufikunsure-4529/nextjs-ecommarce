"use client"
import React, { useState } from 'react';

const initialOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$235', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', amount: '$150', status: 'Processing' },
    { id: '#1236', customer: 'Mike Johnson', amount: '$399', status: 'Shipped' },
    { id: '#1237', customer: 'Alice Brown', amount: '$120', status: 'Cancelled' },
];

const statusOptions = ["Pickup", "Shipped", "Delivered", "Cancelled"];

function ActualOrders() {
    const [orders, setOrders] = useState(initialOrders);

    const updateStatus = (orderId, newStatus) => {
        setOrders(prevOrders => prevOrders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
    };

    return (
        <div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Total Orders</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th className="pb-3">Order ID</th>
                                    <th className="pb-3">Customer</th>
                                    <th className="pb-3">Amount</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3">Update Status  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="border-b last:border-b-0">
                                        <td className="py-4">{order.id}</td>
                                        <td className="py-4">{order.customer}</td>
                                        <td className="py-4">{order.amount}</td>
                                        <td className="py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${order.status === "Delivered" ? "bg-green-100 text-green-800" :
                                                    order.status === "Processing" ? "bg-red-100 text-red-800" :
                                                        order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                                                            order.status === "Cancelled" ? "bg-yellow-100 text-yellow-800" :
                                                                order.status === "Pickup" ? "bg-purple-100 text-purple-800" :
                                                                    "bg-gray-100 text-gray-800"
                                                    }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <select
                                                className="border px-2 py-1 rounded"
                                                value={order.status}
                                                onChange={(e) => updateStatus(order.id, e.target.value)}
                                            >
                                                {statusOptions.map(status => (
                                                    <option key={status} value={status}>{status}</option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActualOrders;
