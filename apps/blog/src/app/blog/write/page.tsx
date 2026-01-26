import { Editor } from "@/widgets/editor";
import { WritePostHeader } from "@/widgets/write-post-header";

export default function WritePage() {
  return (
    <div className="flex h-screen flex-col bg-white">
      <WritePostHeader />
      <div className="container mx-auto flex-1">
        <Editor />
      </div>
    </div>
  );
}
