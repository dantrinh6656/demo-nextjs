// app/components/PostList.tsx
// Đây là Server Component (mặc định là server)
export default async function PostList() {
    // Dữ liệu bài viết thực tế thay vì fetch từ API
    const posts = [
      { id: 1, title: "Dân", excerpt: "TEST" },
      { id: 2, title: "Dân", excerpt: "TEST" },
      { id: 3, title: "Dân", excerpt: "TEST" },
      { id: 4, title: "Dân", excerpt: "TEST" },
      { id: 5, title: "Dân", excerpt: "TEST" }
    ];
  
    return (
      <div style={{ 
        marginBottom: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        padding: "2.0rem",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.15)"
      }}>
        <h2 style={{ 
          color: "#00FFFF", 
          marginBottom: "1rem",
          fontSize: "2.0rem",
          fontWeight: "600"
        }}>
          Danh sách bài viết (Server Component)
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {posts.map((post: any) => (
            <div key={post.id} style={{
              backgroundColor: "rgba(44, 44, 35, 0.03)",
              padding: "1rem",
              borderRadius: "6px",
              border: "1px solid rgba(44, 43, 35, 0.3)",
              transition: "all 0.2s ease"
            }}>
              <h3 style={{ 
                color: "#00FFFF", 
                margin: "0 0 0.5rem 0",
                fontSize: "1.1rem",
                fontWeight: "500"
              }}>
                {post.title}
              </h3>
              <p style={{ 
                color: "rgb(255, 251, 0)", 
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
  