


export const fetchAndConvertMarkdown = async (filePath) => {
    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Failed to fetch Markdown file: ${response.statusText}`);
      }
  
      const markdown = await response.text();
  
      return markdown;
    } catch (error) {
      console.error('Error fetching and converting Markdown:', error);
      throw error;
    }
  };



  export const loadMarkdownFile = async (filePath) => {
    const response = await import(`!raw-loader!${filePath}.md`);
    const markdown = response.default;
  return markdown
  };

