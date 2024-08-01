  export interface TicketTime {
    startTime: string;
    endTime: string;
  }
  
  export interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    time: TicketTime;
    duration: number;
    date: string;
    connectionAmount: number;
  }
  
  export interface TicketsProps {
    tickets: Ticket[];
  }

  export interface MobileMenuProps {
    selectedAirlines: string[];
    selectedTransfers: string[];
  }

 export interface TicketsState {
    tickets: Ticket[];
    loading: boolean;
    error: string | null;
  }

export interface ButtonMoreProps {
    onClick: () => void;
    
  }

export interface AirlinesOption {
  value: string;
  label: string;
  checked: boolean;
}

export interface AirlinesState {
  options: AirlinesOption[];
  filter: {
    checkboxes: string[];
    };
 }


export interface TransferOption {
  value: string;
  label: string;
  checked: boolean;
}

export interface TransferState {
  options: TransferOption[];
  filter: string[];
}


  

  
  