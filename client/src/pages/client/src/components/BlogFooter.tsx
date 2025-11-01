export default function BlogFooter() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-authors-heading">About the Authors</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p data-testid="text-author-1">
                <span className="font-medium text-foreground">Aaryan Nerkar</span> is a technology researcher specializing in AI and its impact on workforce dynamics.
              </p>
              <p data-testid="text-author-2">
                <span className="font-medium text-foreground">Pushkar Chaudhari</span> focuses on future of work trends and organizational transformation.
              </p>
              <p data-testid="text-author-3">
                <span className="font-medium text-foreground">Samrat Latane</span> studies the intersection of AI policy and labor economics.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p data-testid="text-copyright">© 2025 Future of Work Series. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
