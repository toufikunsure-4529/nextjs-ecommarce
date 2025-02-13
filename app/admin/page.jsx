"use client"
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, Menu, ShoppingCart, Package, Users, DollarSign } from 'lucide-react';

const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 2780 },
    { month: 'May', sales: 1890 },
    { month: 'Jun', sales: 2390 },
];

const stockData = [
    { product: 'Shirts', stock: 45 },
    { product: 'Shoes', stock: 85 },
    { product: 'Hats', stock: 25 },
    { product: 'Bags', stock: 35 },
];

const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$235', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', amount: '$150', status: 'Processing' },
    { id: '#1236', customer: 'Mike Johnson', amount: '$399', status: 'Shipped' },
    { id: '#1237', customer: 'Mike Johnson', amount: '$399', status: 'Cancelled' },
];



<div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="md:p-6 p-0">
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
export default function Dashboard() {

    return (
        <div className="min-h-screen bg-gray-100">


            {/* Main Content */}
            <div>
                <div className="px-4 py-6 sm:px-6 lg:px-8">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <DollarSign className="h-8 w-8 text-green-500 mr-3" />
                                <div>
                                    <p className="text-gray-500">Total Sales</p>
                                    <p className="text-2xl font-bold">$24,500</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <ShoppingCart className="h-8 w-8 text-blue-500 mr-3" />
                                <div>
                                    <p className="text-gray-500">Total Orders</p>
                                    <p className="text-2xl font-bold">1,234</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <Package className="h-8 w-8 text-purple-500 mr-3" />
                                <div>
                                    <p className="text-gray-500">Total Products</p>
                                    <p className="text-2xl font-bold">567</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <Users className="h-8 w-8 text-red-500 mr-3" />
                                <div>
                                    <p className="text-gray-500">Total Customers</p>
                                    <p className="text-2xl font-bold">890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={salesData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="sales" stroke="#4f46e5" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
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