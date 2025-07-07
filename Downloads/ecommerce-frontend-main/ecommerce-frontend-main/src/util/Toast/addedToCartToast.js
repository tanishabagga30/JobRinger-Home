import { toast } from 'react-hot-toast';

const addedToCartToast = (image, title) => {
  toast.success(
    <div className="flex items-center gap-3">
      <img src={image} alt={title} className="w-10 h-10 rounded object-cover" />
      <span><strong>{title}</strong> added to cart!</span>
    </div>,
    {
      duration: 3000,
      position: 'top-right',
    }
  );
};

export default addedToCartToast;
