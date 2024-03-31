export interface iSellingPoint {
  compulsory: boolean;
  name: "Пакет A" | "Пакет B" | "Пакет C";
  active: boolean;
  price: string;
  annotation: string;
  services: string[];
}

export interface iOptional {
  name: string;
  price: number;
  active: boolean;
}

export type dataItem = {
  heading: string;
  details: string;
};

export interface iModalData {
  showModal: boolean;
  name: string;
  modalData: dataItem[];
}

export type ModalParams = Omit<iModalData, "showModal">;

export interface CardProps extends iSellingPoint {
  handleModal: ({ name, modalData }: ModalParams) => void;
}
