import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

export function RecommendedPosts() {
  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="font-normal text-black text-xs leading-tight">추천 글</h3>
      <div className="flex w-full flex-col gap-2.5">
        {[1, 2, 3].map((_, i) => (
          <Card key={i} className="rounded-lg border-[#e4e4e7] shadow-sm">
            <CardHeader className="p-6">
              <CardTitle className="font-normal text-[#09090b] text-lg leading-6 tracking-wide">
                Create project
              </CardTitle>
              <CardDescription className="mt-1.5 font-normal text-[#71717a] text-xs leading-tight">
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
