export default function VideoPage() {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-[var(--max-width)]">
      <div className="flex min-h-dvh items-center justify-center">
        <div className="">
          <video id="videoPlayer" width="650" controls muted autoPlay>
            <source src="/video" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
