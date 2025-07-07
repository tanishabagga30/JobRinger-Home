import Image from 'next/image';

export default function LogoEditorModal({
  open,
  onClose,
  productImage,
  logoImage,
  logoPosition,
  setLogoPosition,
}) {
  if (!open) return null;

  const moveLogo = (direction) => {
    const step = 10;
    setLogoPosition((prev) => {
      const newPos = { ...prev };
      if (direction === 'up') newPos.y = Math.max(prev.y - step, 0);
      if (direction === 'down') newPos.y = Math.min(prev.y + step, 324);
      if (direction === 'left') newPos.x = Math.max(prev.x - step, 0);
      if (direction === 'right') newPos.x = Math.min(prev.x + step, 364);
      return newPos;
    });
  };

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
      <div className='bg-white p-4 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-lg font-semibold mb-4'>Adjust Logo Position</h2>
        <div className='relative w-[424px] h-[384px] border mb-4'>
          <Image src={productImage} alt='Product' fill className='object-cover' />
          {logoImage && (
            <img
              src={logoImage}
              alt='Logo'
              className='absolute w-[60px] h-[60px] object-contain z-30'
              style={{
                left: `${logoPosition.x}px`,
                top: `${logoPosition.y}px`,
              }}
            />
          )}
        </div>

        <div className='grid grid-cols-3 gap-2 mb-4'>
          <button onClick={() => moveLogo('up')} className='col-span-3 bg-gray-200 px-3 py-1 rounded'>⬆️ Up</button>
          <button onClick={() => moveLogo('left')} className='bg-gray-200 px-3 py-1 rounded'>⬅️</button>
          <div></div>
          <button onClick={() => moveLogo('right')} className='bg-gray-200 px-3 py-1 rounded'>➡️</button>
          <button onClick={() => moveLogo('down')} className='col-span-3 bg-gray-200 px-3 py-1 rounded'>⬇️ Down</button>
        </div>

        <div className='flex justify-end'>
          <button onClick={onClose} className='bg-black text-white px-4 py-2 rounded'>Done</button>
        </div>
      </div>
    </div>
  );
}
