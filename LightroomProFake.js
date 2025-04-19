// Đọc body từ response của Adobe
let body = $response.body;

// Kiểm tra xem có từ khóa "premium" trong body không
if (body.indexOf('"premium":false') !== -1) {
    // Thay đổi giá trị "premium" từ false thành true
    body = body.replace(/"premium":false/g, '"premium":true');
}

// Trả về body đã được chỉnh sửa
$done({body: body});
