// File: task-list.js

// Import class TaskItem từ file task-item.js để có thể tạo ra các công việc.
import TaskItem from './task-item.js';

export default class TaskList {
  constructor() {
    // Khởi tạo một mảng rỗng để lưu trữ tất cả các đối tượng công việc.
    this.tasks = [];
  }

  /**
   * Thêm một công việc mới vào danh sách.
   * @param {string} taskText - Nội dung công việc cần thêm.
   */
  addTask(taskText) {
    // Dùng class TaskItem đã import để tạo một đối tượng công việc mới.
    const task = new TaskItem(taskText);
    // Thêm đối tượng công việc vừa tạo vào mảng `tasks`.
    this.tasks.push(task);
  }

  /**
   * Hiển thị toàn bộ danh sách công việc ra một container HTML.
   * @param {HTMLElement} container - Thẻ HTML sẽ chứa danh sách công việc.
   */
  renderTasks(container) {
    // 1. Xóa sạch nội dung cũ trong container để tránh hiển thị trùng lặp.
    container.innerHTML = '';

    // 2. Dùng `map` để duyệt qua mảng `tasks`, với mỗi `task`, gọi phương thức `render()`
    // của nó để tạo ra một mảng các thẻ <li>.
    const taskElements = this.tasks.map(task => task.render());

    // 3. Duyệt qua mảng các thẻ <li> vừa tạo và thêm từng thẻ vào container.
    taskElements.forEach(element => {
      container.appendChild(element);
    });

    // 4. Trả về mảng các DOM element đã được tạo theo yêu cầu đề bài.
    return taskElements;
  }
}

