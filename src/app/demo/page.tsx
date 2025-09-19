import PostList from "../components/PostList";
import Counter from "../components/Counter";

export default function DemoPage() {
  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: "1200px", 
      margin: "0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <h1 style={{ 
        marginBottom: "2rem", 
        textAlign: "center",
        background: "linear-gradient(90deg, #06b6d4, #f472b6)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textShadow: "0 0 14px rgba(6, 182, 212, 0.25)"
      }}>
        Trang Demo
      </h1>
      <PostList />   {/* Server Component */}
      <Counter />    {/* Client Component */}
    </div>
  );
}
