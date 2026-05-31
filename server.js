const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình View Engine là EJS
app.set('view engine', 'ejs');

// Dữ liệu mẫu (Mock Data) đúng chuẩn Dracula Theme demo
const mockApis = [
    { name: 'User Authentication', endpoint: '/api/v1/auth', method: 'POST', status: 'Active', responseTime: '45ms' },
    { name: 'Payment Gateway', endpoint: '/api/v1/payments', method: 'POST', status: 'Warning', responseTime: '1240ms' },
    { name: 'Product Catalog', endpoint: '/api/v1/products', method: 'GET', status: 'Active', responseTime: '12ms' },
    { name: 'Image Optimizer', endpoint: '/api/v1/media', method: 'PUT', status: 'Down', responseTime: '0ms' }
];

const mockMails = [
    { sender: 'leo.dog@domain.com', subject: 'Server Alert: High CPU Usage', time: '10 mins ago', status: 'Unread' },
    { sender: 'github-updates@github.com', subject: 'Successful Deployment Notification', time: '1 hour ago', status: 'Read' },
    { sender: 'stripe-reports@stripe.com', subject: 'Monthly Revenue Statement - May 2026', time: 'Yesterday', status: 'Read' }
];

app.get('/', (req, res) => {
    res.render('dashboard', {
        apis: mockApis,
        mails: mockMails
    });
});

app.listen(PORT, () => {
    console.log(`[Dracula Dashboard] Running at http://localhost:${PORT}`);
});
