// Telegram notification utility
// This utility handles sending notifications to the owner's Telegram account

/**
 * Sends a notification to the configured Telegram account
 * @param message The message to send
 * @returns Promise that resolves when the message is sent
 */
export const sendTelegramNotification = async (message: string): Promise<boolean> => {
  try {
    // Using environment variables or constants defined at build time is more secure
    // than hardcoding credentials in the source code
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '7586092532:AAG1UHWS-UddriOjnBXbnaO-0tZKqb9Dx1M';
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '7022340103';
    
    // Format the message for better readability
    const formattedMessage = encodeURIComponent(message);
    
    // Send the message using the Telegram Bot API
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${formattedMessage}&parse_mode=HTML`,
      { method: 'POST' }
    );
    
    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    return false;
  }
};

/**
 * Creates a formatted order notification message
 */
export const createOrderNotification = (
  customerInfo: {
    name: string;
    phone: string;
    area: string;
    landmark: string;
    pin: string;
    city: string;
    state: string;
    note?: string;
  },
  orderInfo: {
    items: Array<{name: string; quantity: number; price: number}>;
    subtotal: number;
    deliveryCharge: number;
    total: number;
  }
) => {
  // Create a readable timestamp
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  
  // Format the items list
  const itemsList = orderInfo.items.map(item => 
    `• ${item.quantity}x ${item.name} - ₹${item.price * item.quantity}`
  ).join('\n');
  
  // Build the message
  return `
<b>🌿 NEW ORDER RECEIVED 🌿</b>
<i>${timestamp}</i>

<b>Customer Information:</b>
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}

<b>Delivery Address:</b>
Area: ${customerInfo.area}
Landmark: ${customerInfo.landmark || 'N/A'}
PIN: ${customerInfo.pin}
City: ${customerInfo.city}
State: ${customerInfo.state}

${customerInfo.note ? `<b>Note:</b> ${customerInfo.note}` : ''}

<b>Order Summary:</b>
${itemsList}

<b>Subtotal:</b> ₹${orderInfo.subtotal}
<b>Delivery:</b> ₹${orderInfo.deliveryCharge}
<b>TOTAL:</b> ₹${orderInfo.total}
`;
};

/**
 * Sends an order notification to Telegram
 */
export const sendOrderToTelegram = async (
  items: Array<{id: number; name: string; price: number; quantity: number; type: string}>,
  customerInfo: {
    name: string;
    phone: string;
    area: string;
    landmark: string;
    pin: string;
    city: string;
    state: string;
    note?: string;
  }
): Promise<boolean> => {
  // Calculate order totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = 50; // Standard delivery charge
  const total = subtotal + deliveryCharge;
  
  // Create the order notification message
  const message = createOrderNotification(
    customerInfo,
    {
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      subtotal,
      deliveryCharge,
      total
    }
  );
  
  // Send the notification
  return sendTelegramNotification(message);
};

/**
 * Creates a formatted contact form notification message
 */
export const createContactFormNotification = (
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }
) => {
  // Create a readable timestamp
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  
  // Build the message
  return `
<b>🌿 NEW CONTACT INQUIRY 🌿</b>
<i>${timestamp}</i>

<b>Customer Information:</b>
Name: ${contactInfo.name}
Email: ${contactInfo.email}
${contactInfo.phone ? `Phone: ${contactInfo.phone}` : ''}

<b>Message:</b>
${contactInfo.message}
`;
};

/**
 * Sends a contact form notification to Telegram
 */
export const sendContactToTelegram = async (
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }
): Promise<boolean> => {
  // Create the contact notification message
  const message = createContactFormNotification(contactInfo);
  
  // Send the notification
  return sendTelegramNotification(message);
};

/**
 * Creates a formatted rental service notification message
 */
export const createRentalNotification = (
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    date: string;
    duration: string;
    notes?: string;
  },
  packageInfo?: {
    title: string;
    price: number;
    includedPlants: number;
  }
) => {
  // Create a readable timestamp
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  
  // Build the message
  return `
<b>🌿 NEW RENTAL REQUEST 🌿</b>
<i>${timestamp}</i>

<b>Customer Information:</b>
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}

<b>Delivery Address:</b>
${customerInfo.address}

<b>Rental Details:</b>
Date: ${customerInfo.date}
Duration: ${customerInfo.duration}
${packageInfo ? `Package: ${packageInfo.title} (₹${packageInfo.price}) - ${packageInfo.includedPlants} plants` : 'Custom Package'}

${customerInfo.notes ? `<b>Special Requirements:</b> ${customerInfo.notes}` : ''}
`;
};

/**
 * Creates a formatted service booking notification message
 */
export const createServiceNotification = (
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    date: string;
    time: string;
    serviceType: string;
    notes?: string;
  }
) => {
  // Create a readable timestamp
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  
  // Build the message
  return `
<b>🌿 NEW SERVICE BOOKING 🌿</b>
<i>${timestamp}</i>

<b>Customer Information:</b>
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}

<b>Service Address:</b>
${customerInfo.address}

<b>Service Details:</b>
Type: ${customerInfo.serviceType}
Date: ${customerInfo.date}
Time: ${customerInfo.time}

${customerInfo.notes ? `<b>Special Requirements:</b> ${customerInfo.notes}` : ''}
`;
};
