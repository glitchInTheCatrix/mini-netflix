declare module '@/components/Slider.vue' {
    import { DefineComponent } from 'vue';
    
    const slider: DefineComponent<{
      title: string;
      movies?: string[]; 
    }>;
  
    export default slider;
  }