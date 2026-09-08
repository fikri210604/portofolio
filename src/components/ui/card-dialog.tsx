"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet } from "lucide-react";
import { useId, useState } from "react";

function CardBrandIcon({ cardType }: { cardType: string | null }) {
  if (cardType === "visa") {
    return (
      <svg className="w-6 h-4" viewBox="0 0 36 24" fill="none">
        <rect width="36" height="24" rx="2" fill="#1434CB" />
        <path
          d="M13.8 16.5L15.6 7.5H18L16.2 16.5H13.8ZM23.4 7.7C22.9 7.5 22.1 7.3 21.1 7.3C18.6 7.3 16.8 8.6 16.8 10.4C16.8 11.8 18 12.6 19 13.1C20 13.6 20.3 13.9 20.3 14.4C20.3 15.1 19.4 15.5 18.5 15.5C17.6 15.5 17 15.3 16.3 15L15.9 14.8L15.6 16.7C16.2 17 17.3 17.2 18.3 17.2C21 17.2 22.7 15.9 22.7 14C22.7 12.9 22 12.1 20.6 11.4C19.8 11 19.3 10.7 19.3 10.1C19.3 9.6 19.9 9.1 21 9.1C21.8 9.1 22.5 9.3 22.9 9.5L23.2 9.6L23.4 7.7ZM28.5 7.5H26.6C26 7.5 25.5 7.7 25.3 8.3L21.6 16.5H24.1L24.6 15.1H27.7L28 16.5H30.2L28.5 7.5ZM25.2 13.3C25.4 12.8 26.2 10.6 26.2 10.6C26.2 10.6 26.4 10.1 26.5 9.7L26.7 10.5C26.7 10.5 27.2 12.6 27.3 13.3H25.2ZM12.7 7.5L10.3 13.7L10 12.3C9.6 10.8 8.2 9.2 6.7 8.4L8.9 16.5H11.4L15.2 7.5H12.7Z"
          fill="white"
        />
      </svg>
    );
  }

  if (cardType === "mastercard") {
    return (
      <svg className="w-6 h-4" viewBox="0 0 36 24" fill="none">
        <rect width="36" height="24" rx="2" fill="#222226" />
        <circle cx="14" cy="12" r="7" fill="#EB001B" />
        <circle cx="22" cy="12" r="7" fill="#F79E1B" fillOpacity="0.85" />
      </svg>
    );
  }

  if (cardType === "amex") {
    return (
      <svg className="w-6 h-4" viewBox="0 0 36 24" fill="none">
        <rect width="36" height="24" rx="2" fill="#007BC1" />
        <text x="6" y="16" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
          AMEX
        </text>
      </svg>
    );
  }

  return <CreditCard size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />;
}

function CardDialog({ triggerText = "Card details" }: { triggerText?: string }) {
  const id = useId();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  // Formatting helpers
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    const parts = raw.match(/.{1,4}/g);
    setCardNumber(parts ? parts.join(" ") : raw);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (raw.length >= 3) {
      setExpiry(`${raw.slice(0, 2)}/${raw.slice(2)}`);
    } else {
      setExpiry(raw);
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvc(raw);
  };

  // Card brand detection
  const cardType = (() => {
    const clean = cardNumber.replace(/\s/g, "");
    if (/^4/.test(clean)) return "visa";
    if (/^(5[1-5]|2[2-7])/.test(clean)) return "mastercard";
    if (/^3[47]/.test(clean)) return "amex";
    return null;
  })();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <Wallet className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Update your card</DialogTitle>
            <DialogDescription className="text-left">
              Your new card will replace your current card.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${id}`}>Name on card</Label>
              <Input
                id={`name-${id}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`number-${id}`}>Card Number</Label>
              <div className="relative">
                <Input
                  id={`number-${id}`}
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="4532 •••• •••• 8901"
                  className="peer pe-10 [direction:inherit]"
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <CardBrandIcon cardType={cardType} />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor={`expiry-${id}`}>Expiry date</Label>
                <Input
                  id={`expiry-${id}`}
                  value={expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  className="[direction:inherit]"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor={`cvc-${id}`}>CVC</Label>
                <Input
                  id={`cvc-${id}`}
                  value={cvc}
                  onChange={handleCvcChange}
                  placeholder="123"
                  className="[direction:inherit]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id={`primary-${id}`}
              checked={isDefault}
              onCheckedChange={(checked) => setIsDefault(Boolean(checked))}
            />
            <Label htmlFor={`primary-${id}`} className="font-normal text-muted-foreground cursor-pointer">
              Set as default payment method
            </Label>
          </div>
          <Button type="button" className="w-full">
            Update card
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { CardDialog, CardDialog as Component };
export default CardDialog;
