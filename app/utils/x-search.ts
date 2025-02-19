export async function checkPostX(postUrl: string, code: string): Promise<boolean> {
    try {
      const response = await fetch(
        `/api/x?url=${encodeURIComponent(postUrl)}&code=${encodeURIComponent(code)}`
      );
      const data = await response.json();
      
      if (!data.success) {
        console.error("API Error:", data.error);
        return false;
      }
  
      return data.verified;
    } catch (error) {
      console.error("Error calling X verification API:", error);
      return false;
    }
}