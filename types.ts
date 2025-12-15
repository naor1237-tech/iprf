export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  label: string;
  description?: string;
}

export enum TreatmentStep {
  Consultation = 'ייעוץ ואבחון',
  BloodDraw = 'לקיחת דם',
  Preparation = 'הכנת ה-IPRF',
  Injection = 'הזרקה לקרקפת'
}