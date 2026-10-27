import { useState } from "react";

export default function NotificationPage() {
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [offers, setOffers] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h2>Notification Settings</h2>

      <div>
        <label>
          <input
            type="checkbox"
            checked={orderUpdates}
            onChange={() => setOrderUpdates(!orderUpdates)}
          />
          Order Updates
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={offers}
            onChange={() => setOffers(!offers)}
          />
          Offers & Promotions
        </label>
      </div>
    </div>
  );
}
