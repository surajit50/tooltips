
export default function TermsPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Terms</h2>
          <p>By accessing ToolKit, you agree to be bound by these terms of service and comply with all applicable laws and regulations.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily use our tools for personal, non-commercial transitory viewing only.</p>
          
          <h2>3. Disclaimer</h2>
          <p>The tools are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall ToolKit or its suppliers be liable for any damages arising out of the use or inability to use the tools.</p>
        </div>
      </div>
    </div>
  )
}
