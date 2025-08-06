Hướng dẫn và Đáp án - Bài tập 24: Hiển Thị Bài Posts và CommentsChào bạn,Bài tập này là một cơ hội tuyệt vời để áp dụng kiến thức về JavaScript bất đồng bộ (Async/Await, Promises, Fetch) vào một ứng dụng thực tế: lấy dữ liệu từ một API trên mạng và hiển thị nó lên trang web.Mục tiêu cuối cùng là tạo ra một trang hiển thị danh sách các bài viết. Khi người dùng nhấn vào nút "Xem Comments" của một bài viết, trang web sẽ tải và hiển thị các bình luận tương ứng ngay bên dưới mà không cần tải lại toàn bộ trang.Hãy làm theo các bước gợi ý dưới đây để hoàn thành bài tập nhé!I. Hướng dẫn & Gợi ý từng bướcBước 1: Chuẩn bị "Bộ khung" HTML (index.html)Mọi trang web đều bắt đầu với HTML. Chúng ta cần một cấu trúc cơ bản để làm nơi hiển thị nội dung.Gợi ý:Tạo một file tên là index.html.Bên trong, bạn cần một thẻ div để chứa tất cả các bài viết. Hãy đặt id cho nó là post-list để JavaScript có thể dễ dàng tìm thấy.Đừng quên dùng thẻ <script> để liên kết đến file script.js của bạn. Nên đặt thẻ này ngay trước khi đóng thẻ </body>.<!-- Gợi ý file index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Danh sách bài viết</title>
</head>
<body>
    <h1>Danh sách bài viết</h1>
    <div id="post-list">
        <!-- JavaScript sẽ chèn bài viết vào đây -->
    </div>
    <script src="script.js"></script>
</body>
</html>
Bước 2: Lấy dữ liệu bài viết từ Internet (Hàm layPosts)Bây giờ chúng ta sẽ dùng JavaScript để "nói chuyện" với server và xin dữ liệu.Gợi ý:Trong file script.js, hãy tạo một hàm async function layPosts().Sử dụng fetch để gọi đến API: https://jsonplaceholder.typicode.com/posts.Vì fetch trả về một Promise, hãy dùng await để chờ nó hoàn thành.Dữ liệu trả về cần được chuyển đổi thành JSON bằng phương thức .json(), và quá trình này cũng cần await.Rất quan trọng: Luôn bọc code fetch trong một khối try...catch để xử lý các lỗi có thể xảy ra (ví dụ: mất mạng, API không hoạt động).// Gợi ý code cho hàm layPosts
async function layPosts() {
    try {
        const response = await fetch('...'); // Điền URL API vào đây
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error("Đã có lỗi xảy ra:", error);
    }
}
Bước 3: "Vẽ" các bài viết lên màn hình (Hàm hienThiPosts)Khi đã có dữ liệu, chúng ta cần biến nó thành các thẻ HTML mà người dùng có thể thấy.Gợi ý:Hàm này sẽ nhận một tham số là mảng các bài viết (kết quả từ hàm layPosts).Dùng document.getElementById('post-list') để lấy div chứa.Sử dụng vòng lặp (ví dụ forEach) để duyệt qua từng post.Với mỗi post, bạn sẽ tạo các thẻ HTML bằng JavaScript (document.createElement) hoặc dùng template string (`) để tạo một chuỗi HTML.Điểm mấu chốt: Với mỗi nút "Xem Comments", làm sao để biết nó thuộc bài viết nào? Hãy thêm một thuộc tính data- vào nút, ví dụ: button.dataset.postId = post.id;.Sau khi tạo xong HTML cho một bài viết, hãy dùng appendChild để thêm nó vào div#post-list.Bước 4: Xử lý sự kiện "Click" và Hiển thị bình luậnĐây là phần kết hợp tất cả lại: tương tác người dùng, gọi API và cập nhật giao diện.Gợi ý:Trong lúc tạo nút "Xem Comments" ở Bước 3, hãy thêm một trình nghe sự kiện click cho nó.Hàm xử lý sự kiện này nên là một hàm async vì nó sẽ phải gọi API để lấy bình luận.Bên trong hàm xử lý sự kiện:Lấy postId từ button.dataset.postId.Tạo một hàm mới async function layCommentsChoPost(postId) (tương tự hàm layPosts) để lấy bình luận từ URL: https://jsonplaceholder.typicode.com/posts/${postId}/comments.Gọi và await hàm layCommentsChoPost(postId) để lấy mảng các bình luận.Tạo một hàm cuối cùng hienThiComments(comments, postDiv) để "vẽ" các bình luận này vào đúng div của bài viết đó.Bước 5: Khởi chạy ứng dụngCuối cùng, chúng ta cần một dòng lệnh để bắt đầu toàn bộ quá trình.Gợi ý:Gọi hàm layPosts(). Vì nó trả về một Promise, hãy dùng phương thức .then().Khi Promise hoàn thành và trả về dữ liệu posts, hãy truyền dữ liệu đó vào hàm hienThiPosts.// Gợi ý code khởi chạy
layPosts().then(posts => {
    // Kiểm tra xem có dữ liệu posts không trước khi hiển thị
    if (posts) {
        hienThiPosts(posts);
    }
});
II. Code tham khảo hoàn chỉnhSau khi đã thử làm theo các gợi ý, bạn có thể tham khảo code hoàn chỉnh dưới đây để so sánh và hoàn thiện bài làm của mình.File 1: index.html<!DOCTYPE html>
<html>
<head>
    <title>Posts & Comments</title>
    <style>
        body {
            font-family: sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1 {
            color: #0056b3;
        }
        .post {
            background-color: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .post h2 {
            margin-top: 0;
            color: #333;
        }
        .view-comments-btn {
            padding: 8px 12px;
            border: none;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        .view-comments-btn:hover {
            background-color: #0056b3;
        }
        .comments-section {
            margin-top: 15px;
            border-top: 1px dashed #ccc;
            padding-top: 15px;
        }
        .comment {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 4px solid #007bff;
            border-radius: 4px;
        }
        .comment h5 {
            margin: 0 0 5px 0;
            font-size: 0.9em;
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Danh Sách Bài Posts</h1>
    <div id="post-list"></div>
    <script src="script.js"></script>
</body>
</html>
File 2: script.js// Hàm bất đồng bộ để lấy danh sách bài viết
async function layPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi tải danh sách posts:", error);
        return [];
    }
}

// Hàm bất đồng bộ để lấy bình luận cho một bài viết cụ thể
async function layCommentsChoPost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Lỗi khi tải comments cho post ID ${postId}:`, error);
        return [];
    }
}

// Hàm hiển thị danh sách bài viết lên trang
function hienThiPosts(posts) {
    const postListDiv = document.getElementById('post-list');
    postListDiv.innerHTML = "";

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button class="view-comments-btn" data-post-id="${post.id}">Xem Comments</button>
            <div class="comments-section" style="display:none;"></div>
        `;

        const viewCommentsBtn = postDiv.querySelector('.view-comments-btn');

        viewCommentsBtn.addEventListener('click', async (event) => {
            const postId = event.target.dataset.postId;
            const commentsSection = postDiv.querySelector('.comments-section');
            
            if (commentsSection.style.display === 'none') {
                const comments = await layCommentsChoPost(postId);
                hienThiComments(comments, postDiv);
                commentsSection.style.display = 'block';
            } else {
                commentsSection.style.display = 'none';
            }
        });

        postListDiv.appendChild(postDiv);
    });
}

// Hàm hiển thị danh sách bình luận vào đúng vị trí
function hienThiComments(comments, postContainer) {
    const commentsSection = postContainer.querySelector('.comments-section');
    commentsSection.innerHTML = "";

    if (comments.length === 0) {
        commentsSection.innerHTML = '<p>Không có bình luận nào.</p>';
        return;
    }

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h5>${comment.name} (${comment.email})</h5>
            <p>${comment.body}</p>
        `;
        commentsSection.appendChild(commentDiv);
    });
}

// Khởi động ứng dụng
layPosts().then(hienThiPosts);
