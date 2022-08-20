import { apply, tw } from "twind";
import { AddressAutofill } from "@mapbox/search-js-react";
import { AutofillRetrieveResponse } from '@mapbox/search-js-core';

type Props = {
  className?: string;
  onSelect: (results: AutofillRetrieveResponse) => void
};

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiaWxpYS10dXJub3V0IiwiYSI6ImNsNzExdnF2NzBrNmkzdm1xYW5zdjBsdzIifQ.t8cMmqUo6Mv2dBTySkkOWg";

export function AddressSearch({ className, onSelect }: Props) {
  return (
    <form>
      <AddressAutofill
        accessToken={MAPBOX_ACCESS_TOKEN}
        onRetrieve={onSelect}
      >
        <input
          autoComplete="shipping address-line1"
          className={tw(apply`rounded-md p-2 bg-white text-gray-600 w-full`, className)}
      />
      </AddressAutofill>
    </form>
  );
}
