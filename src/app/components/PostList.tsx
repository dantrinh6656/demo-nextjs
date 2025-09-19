// app/components/PostList.tsx
// Đây là Server Component (mặc định là server)
export default async function PostList() {
    // Dữ liệu bài viết thực tế thay vì fetch từ API
    const posts = [
      { id: 1, title: "Dân", excerpt: "Tìm hiểu các khái niệm cơ bản của React và cách xây dựng ứng dụng web hiện đại" },
      { id: 2, title: "Dân", excerpt: "Khám phá các cải tiến mới trong Next.js 14 và cách tối ưu hóa performance" },
      { id: 3, title: "Dân", excerpt: "Học cách sử dụng TypeScript để viết code JavaScript an toàn và dễ bảo trì" },
      { id: 4, title: "Dân", excerpt: "So sánh hai công nghệ layout phổ biến và cách chọn lựa phù hợp" },
      { id: 5, title: "Dân", excerpt: "Các kỹ thuật SEO hiệu quả để cải thiện thứ hạng website trên Google" }
    ];
  
    return (
      <div style={{ 
        marginBottom: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        padding: "1.5rem",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.15)"
      }}>
        <h2 style={{ 
          color: "#ffffff", 
          marginBottom: "1rem",
          fontSize: "1.5rem",
          fontWeight: "600"
        }}>
          Danh sách bài viết (Server Component)
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {posts.map((post: any) => (
            <div key={post.id} style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "1rem",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.2s ease"
            }}>
              <h3 style={{ 
                color: "#ffffff", 
                margin: "0 0 0.5rem 0",
                fontSize: "1.1rem",
                fontWeight: "500"
              }}>
                {post.title}
              </h3>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.8)", 
                margin: "0",
                fontSize: "0.9rem",
                lineHeight: "1.5"
              }}>
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  