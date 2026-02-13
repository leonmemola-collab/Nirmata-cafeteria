
import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'novedades',
    title: 'Novedades',
    subtitle: 'Lo último que ha llegado a la carta',
    icon: 'new_releases',
    items: [
      {
        id: 'latte-pistacho',
        name: 'Latte Pistacho',
        description: 'Café latte con crema suave de pistacho. Dulce, cremoso y sorprendente.',
        imageUrl: 'https://images.unsplash.com/photo-1620840935590-0c7f381a12e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isNew: true,
        prices: [{ value: 3.30 }]
      },
      {
        id: 'latte-cookie',
        name: 'Latte Cookie',
        description: 'Sabe a galleta recién horneada. Cremoso y reconfortante.',
        imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop',
        isNew: true,
        prices: [{ value: 3.30 }]
      },
      {
        id: 'latte-tofe',
        name: 'Latte Tofe',
        description: 'Café con leche y caramelo toffee. Intenso y goloso.',
        imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
        isNew: true,
        prices: [{ value: 3.30 }]
      }
    ]
  },
  {
    id: 'calientes',
    title: 'Cafés calientes',
    icon: 'local_cafe',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Pequeño, intenso y directo.',
        imageUrl: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 1.80 }]
      },
      {
        id: 'cortado',
        name: 'Cortado',
        description: 'Como el espresso... pero con modales.',
        imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 1.90 }]
      },
      {
        id: 'machiato',
        name: 'Machiato',
        description: 'Un espresso con espuma de leche. Café con acento italiano.',
        imageUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 1.90 }]
      },
      {
        id: 'cafe-leche',
        name: 'Café con leche',
        description: '50% café, 50% leche, 100% costumbre.',
        imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.00 }, { label: 'G', value: 2.50 }]
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso aguado... pero con dignidad.',
        imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.00 }]
      },
      {
        id: 'long-black',
        name: 'Long Black',
        description: 'Como el americano, pero con estilo. Primero el agua, luego el café.',
        imageUrl: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.00 }]
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Doble espresso con leche cremosa y microespuma.',
        imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.80 }]
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Café con leche y mucha espuma. Puro equilibrio y espuma top.',
        imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.20 }, { label: 'G', value: 3.00 }]
      },
      {
        id: 'moca',
        name: 'Moca',
        description: 'Café con chocolate y drama.',
        imageUrl: 'https://images.unsplash.com/photo-1522992319-03f560f29d79?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.50 }, { label: 'G', value: 3.30 }]
      },
      {
        id: 'white-moca',
        name: 'White Moca',
        description: 'El moca en modo diva. Más blanco, más dulce, más drama.',
        imageUrl: 'https://images.unsplash.com/photo-1444418185997-1145401101e0?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.50 }, { label: 'G', value: 3.30 }]
      }
    ]
  },
  {
    id: 'frios',
    title: 'Cafés fríos',
    icon: 'ac_unit',
    items: [
      {
        id: 'dirty-coffee',
        name: 'Dirty Coffee',
        description: 'Leche fría + espresso caliente. Parece un accidente, pero sabe increíble.',
        imageUrl: 'https://images.unsplash.com/photo-1517713982677-4c2338ad2722?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.50 }]
      },
      {
        id: 'tonic-coffee',
        name: 'Tonic Coffee',
        description: 'Café con tónica. Burbujeante, refrescante... y raramente adictivo.',
        imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 3.50 }]
      },
      {
        id: 'ice-latte',
        name: 'Ice Latte',
        description: 'Leche fría, café y hielo. El verano en una taza (aunque sea febrero).',
        imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcaf1f17e7?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.60 }]
      },
      {
        id: 'affogato',
        name: 'Affogato',
        description: 'Helado ahogado en espresso. Postre, café... y planazo.',
        imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc4586c552?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 3.50 }]
      }
    ]
  },
  {
    id: 'especiales',
    title: 'Especiales',
    icon: 'auto_awesome',
    items: [
      {
        id: 'lotus-latte',
        name: 'Lotus Latte',
        description: 'Sabe a galleta. Si te lo tomas lento, te lo quitan.',
        imageUrl: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=800&auto=format&fit=crop',
        isNew: true,
        prices: [{ label: 'P', value: 2.90 }, { label: 'G', value: 3.90 }]
      },
      {
        id: 'nutella-latte',
        name: 'Nutella Latte',
        description: 'Café + Nutella = felicidad líquida.',
        imageUrl: 'https://images.unsplash.com/photo-1544787210-2213d2429f9c?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.90 }, { label: 'G', value: 3.90 }]
      },
      {
        id: 'honey-moon',
        name: 'Honey Moon',
        description: 'Espresso con leche y miel. Dulce, suave y peligrosamente adictivo.',
        imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.90 }, { label: 'G', value: 3.90 }]
      },
      {
        id: 'caramel-latte',
        name: 'Caramel Latte',
        description: 'Leche, café y caramelo. ¿Café o capricho? Sí.',
        imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
        prices: [{ label: 'P', value: 2.90 }, { label: 'G', value: 3.90 }]
      }
    ]
  },
  {
    id: 'mas',
    title: 'Más para beber',
    icon: 'emoji_food_beverage',
    items: [
      {
        id: 'matcha',
        name: 'Matcha',
        description: 'Verde, vegetal y poderoso.',
        imageUrl: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.70 }]
      },
      {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        description: 'El lado cremoso del matcha.',
        imageUrl: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 3.00 }]
      },
      {
        id: 'tes-premium',
        name: 'Tés e Infusiones Premium',
        description: 'Rooibos, té verde con lima, té rojo con naranja...',
        imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.00 }]
      },
      {
        id: 'te-americano',
        name: 'Té Americano',
        description: 'Infusión estilo americano.',
        imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc4586c552?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.30 }]
      },
      {
        id: 'batido-chocolate',
        name: 'Batido de chocolate',
        description: 'Delicioso batido cremoso.',
        imageUrl: 'https://images.unsplash.com/photo-1544787210-2213d2429f9c?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 1.50 }]
      },
      {
        id: 'agua-mineral',
        name: 'Agua Mineral',
        description: 'Botella 500ml.',
        imageUrl: 'https://images.unsplash.com/photo-1523362628744-0c14a377325b?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.00 }]
      },
      {
        id: 'agua-gas',
        name: 'Agua con gas',
        description: 'Refrescante agua mineral carbonatada.',
        imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.50 }]
      },
      {
        id: 'refrescos',
        name: 'Refrescos',
        description: 'Coca Cola, Coca Cola Zero, Kas, Aquarius...',
        imageUrl: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.50 }]
      },
      {
        id: 'bitter-kas',
        name: 'Bitter Kas',
        description: 'El aperitivo clásico sin alcohol.',
        imageUrl: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.50 }]
      },
      {
        id: 'tonica',
        name: 'Tónica',
        description: 'Tónica premium.',
        imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 2.50 }]
      }
    ]
  },
  {
    id: 'acompañar',
    title: 'Para acompañar tu café',
    icon: 'cookie',
    items: [
      {
        id: 'galleta-kinder',
        name: 'Galleta de Kinder',
        description: 'Galleta rellena con crema de Kinder. Crujiente por fuera, cremosa por dentro.',
        imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop',
        prices: []
      },
      {
        id: 'galleta-pistacho',
        name: 'Galleta de pistacho',
        description: 'Toque tostado y relleno suave de pistacho. Sabor delicado y diferente.',
        imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
        prices: []
      },
      {
        id: 'galleta-chocolate',
        name: 'Galleta de chocolate',
        description: 'Clásica, con trozos grandes de chocolate negro. Dulce, intensa y siempre buena.',
        imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop',
        prices: []
      }
    ]
  },
  {
    id: 'para-llevar',
    title: 'Llévate Nirmata a casa',
    subtitle: 'Nuestros cafés especiales en grano o molidos',
    icon: 'shopping_bag',
    items: [
      {
        id: 'etiopia-chelbesa',
        name: 'Etiopía – Chelbesa',
        description: 'Floral y brillante. Ideal para filtro. En grano o molido.',
        imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop',
        prices: [{ value: 11.50 }]
      },
      {
        id: 'colombia-santa-elena',
        name: 'Colombia – Santa Elena',
        description: 'Chocolate y caramelo. Perfecto para espresso. En grano o molido.',
        imageUrl: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1200&auto=format&fit=crop',
        prices: [{ value: 10.90 }]
      },
      {
        id: 'blend-nirmata-casa',
        name: 'Blend Nirmata – Casa',
        description: 'Equilibrado y dulce. Versátil para todo uso. En grano o molido.',
        imageUrl: 'https://images.unsplash.com/photo-1524350303351-80857771c73a?q=80&w=1200&auto=format&fit=crop',
        prices: [{ value: 9.90 }]
      },
      {
        id: 'guatemala-huehuetenango',
        name: 'Guatemala – Huehuetenango',
        description: 'Notas a frutos secos y cacao. Suave y redondo. En grano o molido.',
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
        prices: [{ value: 10.50 }]
      },
      {
        id: 'kenia-kiambu',
        name: 'Kenia – Kiambu',
        description: 'Cítrico y afrutado. Excelente para V60. En grano o molido.',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
        prices: [{ value: 11.90 }]
      },
      {
        id: 'brasil-fazenda-primavera',
        name: 'Brasil – Fazenda Primavera',
        description: 'Dulce, con cuerpo. Ideal para prensa francesa. En grano o molido.',
        imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
        prices: [{ value: 9.80 }]
      }
    ]
  }
];

export const EXTRAS = [
  { name: 'Opción vegetal', price: 0.30 },
  { name: 'Extra shot', price: 0.70 },
  { name: 'Hielo', price: 0.10 }
];
