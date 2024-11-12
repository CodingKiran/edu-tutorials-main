import { Card } from "@/components/ui/card";

export default function VideoPlayer(){
    return(
        <Card className="lg:col-span-2 h-full">
        <div className="relative aspect-video w-full h-full">
          <iframe
            className="w-full h-full rounded-sm "
            src="https://www.youtube.com/embed/deNzYrTvqCs?si=zeMEE-6ireE0CGQp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Card>
    )
}