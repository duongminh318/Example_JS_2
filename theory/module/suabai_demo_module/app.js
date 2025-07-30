// File: app.js

// 1. Import class TaskList để có thể tạo đối tượng quản lý.
import TaskList from './task-list.js';

// 2. Tạo một đối tượng TaskList để quản lý toàn bộ ứng dụng.
const taskList = new TaskList();

// 3. Lấy các element cần thiết từ HTML bằng ID của chúng.
const container = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');

// 4. Gọi renderTasks ngay khi tải trang để hiển thị danh sách (lúc đầu sẽ rỗng).
taskList.renderTasks(container);

// 5. Gắn trình xử lý sự kiện "click" cho nút "Thêm".
addTaskButton.addEventListener('click', () => {
  // Lấy giá trị từ ô input và dùng `trim()` để xóa khoảng trắng thừa ở đầu và cuối.
  const taskText = newTaskInput.value.trim(); // 

  // Kiểm tra nếu input rỗng.
  if (taskText === '') {
    // Nếu rỗng, hiển thị thông báo và dừng lại.
    alert('Vui lòng nhập công việc!');
    return;
  }

  // Nếu input hợp lệ, gọi phương thức để thêm công việc mới.
  taskList.addTask(taskText);

  // Gọi phương thức để hiển thị lại danh sách công việc đã được cập nhật.
  const renderedElements = taskList.renderTasks(container);

  // In ra console mảng các DOM element theo yêu cầu.
  console.log('Rendered DOM elements:', renderedElements);

  // Xóa nội dung trong ô input để người dùng tiện nhập công việc tiếp theo.
  newTaskInput.value = '';
});

