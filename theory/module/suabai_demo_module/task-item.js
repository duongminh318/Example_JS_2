// File: task-item.js

// Dùng `export default` để các file khác có thể import class này.
export default class TaskItem {
  /**
   * Hàm khởi tạo, được gọi khi một đối tượng TaskItem mới được tạo.
   * @param {string} taskText - Nội dung văn bản của công việc.
   */
  constructor(taskText) {
    // Lưu lại nội dung công việc.
    this.text = taskText;
    // Mặc định một công việc mới chưa được hoàn thành.
    this.completed = false;
  }

  /**
   * Phương thức để đánh dấu công việc là đã hoàn thành.
   */
  markComplete() {
    // Chuyển trạng thái `completed` thành true.
    this.completed = true;
  }

  /**
   * Tạo và trả về một thẻ <li> trong HTML để hiển thị công việc.
   */
  render() {
    // 1. Tạo một element <li> mới.
    const li = document.createElement('li');

    // 2. Gán nội dung công việc vào thẻ <li>.
    li.textContent = this.text;

    // 3. Kiểm tra xem công việc đã hoàn thành chưa để thêm class 'completed'.
    if (this.completed) {
      li.classList.add('completed');
    }

    // 4. Gắn sự kiện 'click' vào thẻ <li>.
    li.addEventListener('click', () => {
      // Khi người dùng click, gọi phương thức để cập nhật trạng thái...
      this.markComplete();
      // ...và thêm class 'completed' để giao diện được cập nhật (gạch ngang chữ).
      li.classList.add('completed');
    });

    // 5. Trả về thẻ <li> hoàn chỉnh.
    return li;
  }
}

