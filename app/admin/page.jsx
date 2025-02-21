"use client";

import CountMeter from './components/CountMeter';
import RevenueChart from './components/RevenueChart';
import OrdersChart from './components/OrdersChart';
import { useOrdersCountsByTotalDays } from '@/lib/firestore/orders/read_count';
import { useEffect, useState } from 'react';

const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$235', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', amount: '$150', status: 'Processing' },
    { id: '#1236', customer: 'Mike Johnson', amount: '$399', status: 'Shipped' },
    { id: '#1237', customer: 'Mike Johnson', amount: '$399', status: 'Cancelled' },
];


export default function Dashboard() {
    const [dates, setDates] = useState([]);
    useEffect(() => {
        let list = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            list.push(date);
        }
        setDates(list);
    }, []);

    const { data } = useOrdersCountsByTotalDays({ dates: dates });

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <div>
                <div className="px-4 py-6 sm:px-6 lg:px-8">

                    <CountMeter />
                    <div className=' flex gap-5 flex-col md:flex-row mb-6'>
                        <RevenueChart items={data} />
                        <OrdersChart items={data} />
                    </div>

                    {/* Recent Orders Table */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left text-gray-500 border-b">
                                            <th className="pb-3">Order ID</th>
                                            <th className="pb-3">Customer</th>
                                            <th className="pb-3">Amount</th>
                                            <th className="pb-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="border-b last:border-b-0">
                                                <td className="py-4">{order.id}</td>
                                                <td className="py-4">{order.customer}</td>
                                                <td className="py-4">{order.amount}</td>
                                                <td className="py-4">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-sm ${order.status === "Delivered"
                                                            ? "bg-green-100 text-green-800"
                                                            : order.status === "Processing"
                                                                ? "bg-red-100 text-red-800"
                                                                : order.status === "Shipped"
                                                                    ? "bg-blue-100 text-blue-800"
                                                                    : order.status === "Cancelled"
                                                                        ? "bg-yellow-100 text-yellow-800"
                                                                        : "bg-gray-100 text-gray-800"
                                                            }`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </div >
    );
}