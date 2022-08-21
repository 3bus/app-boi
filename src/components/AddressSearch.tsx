import { apply, tw } from "twind";
import { AddressAutofill } from "@mapbox/search-js-react";
import { AutofillRetrieveResponse } from "@mapbox/search-js-core";

type Props = {
  className?: string;
  onSelect: (results: AutofillRetrieveResponse) => void;
};

export function AddressSearch({ className, onSelect }: Props) {
  return (
    <form>
      <AddressAutofill
        accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        onRetrieve={onSelect}
      >
        <input
          autoComplete="shipping address-line1"
          placeholder="Search an address"
          className={tw(
            apply`rounded-md p-2 bg-white text-gray-600 w-full`,
            className
          )}
        />
      </AddressAutofill>
    </form>
  );
}
