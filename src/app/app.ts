import { Component } from '@angular/core';

type StoreId = 'all' | 'roble' | 'mackena' | 'tucapel';
type CategoryId = 'all' | 'alimento' | 'snack' | 'antiparasitario' | 'accesorio';

interface Store {
  id: StoreId;
  name: string;
  hours: string;
  badge: string;
  icon?: string;
}

interface Category {
  id: CategoryId;
  label: string;
  icon: string;
}

interface Product {
  name: string;
  cat: CategoryId;
  desc: string;
  price: string;
  priceOld?: string;
  oferta: boolean;
  emoji: string;
  image?: string;
  images?: string[];
  stores: Array<Exclude<StoreId, 'all'>>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly stores: Store[] = [
    {
      id: 'all',
      name: 'Todas las tiendas',
      hours: 'Ver todo el catalogo disponible',
      badge: '3 locales',
    },
    {
      id: 'roble',
      name: 'El Roble #3613',
      hours: 'Lun–Vie: 11:00–20:00\nSab: 10:00–20:00',
      badge: 'Principal',
      icon: 'ti ti-map-pin',
    },
    {
      id: 'mackena',
      name: 'B.V. Mackena #890',
      hours: 'Lun–Vie: 10:00–20:00\nSab: 10:00–18:00',
      badge: 'Sucursal',
      icon: 'ti ti-map-pin',
    },
    {
      id: 'tucapel',
      name: 'Tucapel #1200',
      hours: 'Lun–Vie: 10:00–20:00\nSab: 10:00–18:00',
      badge: 'Sucursal',
      icon: 'ti ti-map-pin',
    },
  ];

  protected readonly categories: Category[] = [
    { id: 'all', label: 'Todo', icon: 'ti ti-layout-grid' },
    { id: 'alimento', label: 'Alimentos', icon: 'ti ti-meat' },
    { id: 'snack', label: 'Snacks Churu', icon: 'ti ti-cookie' },
    { id: 'antiparasitario', label: 'Antiparasitarios', icon: 'ti ti-shield-check' },
    { id: 'accesorio', label: 'Accesorios', icon: 'ti ti-collar' },
  ];

  protected readonly storeNames: Record<Exclude<StoreId, 'all'>, string> = {
    roble: 'El Roble',
    mackena: 'Mackena',
    tucapel: 'Tucapel',
  };

  protected currentStore: StoreId = 'all';
  protected currentCategory: CategoryId = 'all';

  protected readonly products: Product[] = [
    {
      name: 'Churu topk9 cremitos Pollo-Atun-Salmon',
      cat: 'snack',
      desc: 'Pack de cremitos para gatos. Sabores variados: pollo, atun y salmon. Oferta.',
      price: '$1.500',
      oferta: true,
      emoji: '🧡',
      image: 'assets/Churu topk9 cremitos Pollo-Atun-Salmon.png',
      stores: ['roble', 'mackena'],
    },
    {
      name: 'Churu perro en tarro 50 uni',
      cat: 'snack',
      desc: 'Tarro con 50 cremitos para perros. Ideal para snack diario.',
      price: '$28.000',
      oferta: false,
      emoji: '🥩',
      image: 'assets/Churu perro en tarro 50 uni.jpg',
      stores: ['roble', 'tucapel'],
    },
    {
      name: 'Churu perro pack 4 uni',
      cat: 'snack',
      desc: 'Pack de 4 cremitos sabor pollo para perros.',
      price: '$2.800',
      oferta: false,
      emoji: '🎁',
      images: [
        'assets/Churu perro pack 4 uni.jpg',
        'assets/Churu perro pack 4 uni(atras).webp',
      ],
      stores: ['mackena', 'tucapel'],
    },
    {
      name: 'Churu gato unidad 4 tubos',
      cat: 'snack',
      desc: 'Pack de 4 cremitos individuales para gatos.',
      price: '$2.500',
      oferta: false,
      emoji: '🐱',
      image: 'assets/Churu gato unidad 4 tubos.avif',
      stores: ['roble'],
    },
    {
      name: 'Churu gato en tarro 50 uni',
      cat: 'snack',
      desc: 'Tarro de 50 cremitos para gatos. Gran variedad de sabores.',
      price: '$28.000',
      oferta: false,
      emoji: '🫙',
      images: [
        'assets/Churu gato en tarro 50 uni/adelante.avif',
        'assets/Churu gato en tarro 50 uni/2.avif',
      ],
      stores: ['mackena'],
    },
    {
      name: 'Churu gato pack 40 uni Pollo o Atun',
      cat: 'snack',
      desc: 'Pack economico de 40 unidades sabor pollo o atun para gatos.',
      price: '$21.000',
      oferta: false,
      emoji: '📦',
      image: 'assets/Churu gato pack 40 uni Pollo o Atun.jpg',
      stores: ['roble', 'tucapel'],
    },
    {
      name: 'NexGard 2-4 kg · 1 pastilla',
      cat: 'antiparasitario',
      desc: 'Anti pulgas y garrapatas para perros de 2 a 4 kg. 1 comprimido.',
      price: '$10.000',
      oferta: false,
      emoji: '🛡️',
      image: 'assets/NexGard 2-4 kg · 1 pastilla.jpg',
      stores: ['roble', 'mackena'],
    },
    {
      name: 'NexGard 2-4 kg · 3 pastillas',
      cat: 'antiparasitario',
      desc: 'Anti pulgas y garrapatas 2-4 kg. Pack de 3 comprimidos. Oferta.',
      price: '$18.000',
      priceOld: '$20.000',
      oferta: true,
      emoji: '🛡️',
      image: 'assets/NexGard 2-4 kg · 3 pastillas.svg',
      stores: ['tucapel'],
    },
    {
      name: 'Balanced adulto mediano Cordero 15 kg',
      cat: 'alimento',
      desc: 'VitalCan Balanced Natural Recipe. Sensitive, piel y pelaje saludable.',
      price: '$55.000',
      oferta: false,
      emoji: '🌾',
      image: 'assets/Balanced adulto mediano Cordero 15 kg.png',
      stores: ['roble', 'tucapel'],
    },
    {
      name: 'Balanced adulto mediano Cerdo 15 kg',
      cat: 'alimento',
      desc: 'VitalCan Balanced Natural Recipe. Formula sensitive con cerdo.',
      price: '$55.000',
      oferta: false,
      emoji: '🌾',
      image: 'assets/Balanced adulto mediano Cordero 15 kg.png',
      stores: ['mackena'],
    },
    {
      name: 'Balanced adulto mediano Cerdo 3 kg',
      cat: 'alimento',
      desc: 'VitalCan Balanced Natural Recipe. Tamano ideal para probar la formula.',
      price: '$18.000',
      oferta: false,
      emoji: '🌾',
      image: 'assets/Balanced adulto mediano Cordero 15 kg.png',
      stores: ['roble'],
    },
  ];

  protected setStore(storeId: StoreId): void {
    this.currentStore = storeId;
  }

  protected setCategory(categoryId: CategoryId): void {
    this.currentCategory = categoryId;
  }

  protected get filteredProducts(): Product[] {
    return this.products.filter((product) => {
      const matchesCategory =
        this.currentCategory === 'all' || product.cat === this.currentCategory;
      const matchesStore =
        this.currentStore === 'all' || product.stores.includes(this.currentStore);
      return matchesCategory && matchesStore;
    });
  }

  protected openWhatsapp(): void {
    window.open('https://wa.me/56983347085', '_blank', 'noopener,noreferrer');
  }
}
