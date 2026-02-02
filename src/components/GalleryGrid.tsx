import { withBase } from '../data/weeks';
import type { PhotoEntry } from '../data/weeks';

type Props = {
  photos: PhotoEntry[];
};

export function GalleryGrid({ photos }: Props) {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {photos.map((p) => {
        const imgSrc = withBase(p.src);

        return (
          <a
            key={p.src}
            href={imgSrc}
            target='_blank'
            rel='noreferrer'
            className='group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:bg-white/10'
            title={p.title ?? p.author}
          >
            <div className='relative aspect-[4/3] w-full overflow-hidden'>
              <img
                src={imgSrc}
                alt={p.alt}
                loading='lazy'
                className='h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]'
              />
            </div>

            <div className='px-4 py-3'>
              <div className='text-sm font-semibold text-white/90'>{p.author}</div>
              {p.title ? <div className='text-sm text-white/70'>{p.title}</div> : null}
            </div>
          </a>
        );
      })}
    </div>
  );
}
