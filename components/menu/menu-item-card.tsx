import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { MenuItem } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        <p className="mt-2 font-medium">
          {formatPrice(item.price)} per {item.unit}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => addItem(item)} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}