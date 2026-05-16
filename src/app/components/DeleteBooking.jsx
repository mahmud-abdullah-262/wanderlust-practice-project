"use client";

import {AlertDialog, Button} from "@heroui/react";
import { cancelBooking, deleteDestination } from "../data/action";

export function DeleteBooking({booking}) {

   const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = booking;

   const handleDelete = async (id) => {
    await cancelBooking(id);
  }
  return (
    <AlertDialog>
      <Button variant="outline" className={'rounded-none border-red-400 text-red-400 text-xs'} >Delete Booking</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <span className="font-bold">{destinationName}</span>  and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={() => handleDelete(_id)} slot="close" variant="danger">
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}