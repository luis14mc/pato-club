import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'PC003750',
    name: 'Pato CLUB - Love is Red Edition',
    price: 1245,
    image: '/products/valentines/Hoodie-rojo-pareja.webp',
    category: 'Edición Especial',
    description: 'Una pieza que encapsula la intensidad del amor, la pasión y la fuerza emocional.',
    features: [
      'Corte boxy fit',
      'Diseño y color exclusivo y limitado',
      'Estampado premium con vinil textil',
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'cálida y confortable'
    ],
    colors: [
      { name: 'Rojo', hex: '#631B26', image: '/products/valentines/modals/hoodierojo-modal.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'PC001600',
    name: 'Pato CLUB – Anti-Valentine’s Edition',
    price: 745,
    image: '/products/valentines/antivalentine.webp',
    category: 'Edición Especial',
    description: 'Diseñada para quienes no siguen reglas ni celebran lo convencional. Esta camiseta representa independencia, actitud y no siguen a la manada.',
    features: [
      'Corte semi oversize',
      'Diseño exclusivo y limitado',
      'Estampado premium en DTF y vinil textil',
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante'
    ],
    colors: [
      { name: 'Rojo  Vino', hex: '#740000', image: '/products/valentines/modals/antivalentine/antivalentine-vino-modal.webp' },
      { name: 'Gris', hex: '#767171', image: '/products/valentines/modals/antivalentine/antivalentine-gris-modal.webp' },
      { name: 'verde', hex: '#484E30', image: '/products/valentines/modals/antivalentine/antivalentine-verde-modal.webp' },
      { name: 'azul', hex: '#0027A4', image: '/products/valentines/modals/antivalentine/antivalentine-azul-modal.webp' },
      { name: 'blanco', hex: '#FFFFFF', image: '/products/valentines/modals/antivalentine/antivalentine-blanco-modal.webp' },
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'PC001800',
    name: 'Pato CLUB – The Golden Pair Edition',
    price: 745,
    image: '/products/valentines/goldenpair.webp',
    category: 'Edición Especial',
    description: 'Inspirada en la conexión real, una prenda que celebra la monogamia, la complicidad y la fuerza de los lazos auténticos.',
    features: [
      'Corte semi oversize',
      'Diseño exclusivo y limitado',
      'Estampado premium en DTF y vinil textil',
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante'
    ],
    colors: [
      { name: 'Rojo vino', hex: '#740000', image: '/products/valentines/modals/goldenpair/goldenpair-vino-modal.webp' },
      { name: 'Gris', hex: '#767171', image: '/products/valentines/modals/goldenpair/goldenpair-gris-modal.webp' },
      { name: 'verde', hex: '#484E30', image: '/products/valentines/modals/goldenpair/goldenpair-verde-modal.webp' },
      { name: 'azul', hex: '#0027A4', image: '/products/valentines/modals/goldenpair/goldenpair-azul-modal.webp' },
      { name: 'blanco', hex: '#FFFFFF', image: '/products/valentines/modals/goldenpair/goldenpair-blanca-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC001810',
    name: 'Pato CLUB – Friendship Edition',
    price: 745,
    image: '/products/valentines/frienship.webp',
    category: 'Edición Especial',
    description: 'Un homenaje a la amistad auténtica, expresado a través de un diseño limpio, retro y de estética cartoon.',
    features: [
      'Corte semi oversize',
      'Diseño exclusivo y limitado',
      'Estampado premium en DTF y vinil textil',
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante'
    ],
    colors: [
      { name: 'Rojo', hex: '#740000', image: '/products/valentines/modals/frienship/frienship-vino-modal.webp' },
      { name: 'Gris', hex: '#767171', image: '/products/valentines/modals/frienship/frienship-gris-modal.webp' },
      { name: 'verde', hex: '#484E30', image: '/products/valentines/modals/frienship/frienship-verde-modal.webp' },
      { name: 'azul', hex: '#0027A4', image: '/products/valentines/modals/frienship/frienship-azul-modal.webp' },
      { name: 'Blanco', hex: '#FFFFF', image: '/products/valentines/modals/frienship/frienship-blanco-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC001250',
    name: 'Pato CLUB Hoodie – Boxy Fit',
    price: 1045,
    image: '/products/basicos/hoodie-boxyfit.webp',
    category: 'Basics',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      
      { name: 'Gris', hex: '#767171', image: '/products/hoodies/modals/hoodie-gris-modal.webp' },
      { name: 'verde', hex: '#484E30', image: '/products/hoodies/modals/hoodie-verde-modal.webp' },
      { name: 'azul', hex: '#0027A4', image: '/products/hoodies/modals/hoodie-azul-modal.webp' },
      { name: 'negro', hex: '#000000', image: '/products/hoodies/modals/hoodie-negro-modal.webp' },
      { name: 'blanco', hex: '#FFFFFF', image: '/products/hoodies/modals/hoodie-blanco-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003500',
    name: 'Pato CLUB Pantalón Deportivo – Wide Leg',
    price: 945,
    image: '/products/basicos/pantalondeportivo-wideleg.webp',
    category: 'Basics',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'Rojo vino', hex: '#740000', image: '/products/pantalones/modals/pantalon-rojovino-modal.webp' },
      { name: 'Gris', hex: '#767171', image: '/products/pantalones/modals/pantalon-gris-modal.webp' },
      { name: 'Verde', hex: '#484E30', image: '/products/pantalones/modals/pantalon-verde-modal.webp' },
      { name: 'Azul', hex: '#0027A4', image: '/products/pantalones/modals/pantalon-azul-modal.webp' },
      { name: 'Negro', hex: '#000000', image: '/products/pantalones/modals/pantalon-negro-modal.webp' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/products/pantalones/modals/pantalon-blanco-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003600',
    name: 'Pato CLUB Camiseta Semi-Oversize – Dos Tonos',
    price: 645,
    image: '/products/basicos/semi-oversize.webp',
    category: 'Basics',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje, canale en cuello y mangas en tonos diferentes y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad',
    ],
    colors: [
      { name: 'Rojo Vino', hex: '#740000', image: '/products/camisetas/modals/camisa-vino-modal.webp' },
      { name: 'Gris', hex: '#767171', image: '/products/camisetas/modals/camisa-gris-modal.webp' },
      { name: 'verde', hex: '#484E30', image: '/products/camisetas/modals/camisa-verde-modal.webp' },
      { name: 'azul', hex: '#0027A4', image: '/products/camisetas/modals/camisa-azul-modal.webp' },
      { name: 'negro', hex: '#000000', image: '/products/camisetas/modals/camisa-negra-modal.webp' },
      { name: 'blanco', hex: '#FFFFFF', image: '/products/camisetas/modals/camisa-blanca-modal.webp' }
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  { 
    id: 'PC003610',
    name: 'Pato CLUB Hoodie Negro – Boxy Fit',
    price: 1045,
    image: '/products/hoodies/Hoodie-negro.webp',
    category: 'Hoodies',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'negro', hex: '#000000', image: '/products/hoodies/modals/hoodie-negro-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003620',
    name: 'Pato CLUB Hoodie Blanco – Boxy Fit',
    price: 1045,
    image: '/products/hoodies/Hoodie-blanco.webp',
    category: 'Hoodies',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'blanco', hex: '#FFFFFF', image: '/products/hoodies/modals/hoodie-blanco-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003630',
    name: 'Pato CLUB Hoodie Verde – Boxy Fit',
    price: 1045,
    image: '/products/hoodies/Hoodie-verde.webp',
    category: 'Hoodies',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'verde', hex: '#484E30', image: '/products/hoodies/modals/hoodie-verde-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003640',
    name: 'Pato CLUB Hoodie Rojo Vino – Boxy Fit',
    price: 1045,
    image: '/products/hoodies/Hoodie-rojo-vino.webp',
    category: 'Hoodies',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'Rojo Vino', hex: '#740000', image: '/products/hoodies/modals/hoodie-rojovino-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003650',
    name: 'Pato CLUB Hoodie Gris – Boxy Fit',
    price: 1045,
    image: '/products/hoodies/Hoodie-gris.webp',
    category: 'Hoodies',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'Gris', hex: '#767171', image: '/products/hoodies/modals/hoodie-gris-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC003700',
    name: 'Pato CLUB Hoodie Azul – Boxy Fit',
    price: 1045,
    image: '/products/hoodies/Hoodie-azul.webp',
    category: 'Hoodies',
    description: 'Diseño boxy con estructura, mangas anchas, canalé grueso en la cintura y puños, capucha estructurada, bolsas invisibles, comodidad y estilo urbano elevado.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálida y confortable',
    ],
    colors: [
      { name: 'Azul', hex: '#0027A4', image: '/products/hoodies/modals/hoodie-azul-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC004010',
    name: 'Pato CLUB Pantalón Deportivo Negro – Wide Leg',
    price: 945,
    image: '/products/pantalones/modals/pantalon-negro-modal.webp',
    category: 'Pantalón Deportivo',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálido y confortable',
    ],
    colors: [
      { name: 'negro', hex: '#000000', image: '/products/pantalones/modals/pantalon-negro-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC004020',
    name: 'Pato CLUB Pantalón Deportivo Blanco – Wide Leg',
    price: 945,
    image: '/products/pantalones/modals/pantalon-blanco-modal.webp',
    category: 'Pantalón Deportivo',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálido y confortable',
    ],
    colors: [
      { name: 'blanco', hex: '#FFFFFF', image: '/products/pantalones/modals/pantalon-blanco-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC004030',
    name: 'Pato CLUB Pantalón Deportivo Verde – Wide Leg',
    price: 945,
    image: '/products/pantalones/modals/pantalon-verde-modal.webp',
    category: 'Pantalón Deportivo',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálido y confortable',
    ],
    colors: [
      { name: 'verde', hex: '#484E30', image: '/products/pantalones/modals/pantalon-verde-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC004040',
    name: 'Pato CLUB Pantalón Deportivo Rojo Vino – Wide Leg',
    price: 945,
    image: '/products/pantalones/modals/pantalon-rojovino-modal.webp',
    category: 'Pantalón Deportivo',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálido y confortable',
    ],
    colors: [
      { name: 'Rojo Vino', hex: '#740000', image: '/products/pantalones/modals/pantalon-rojovino-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC004050',
    name: 'Pato CLUB Pantalón Deportivo Gris – Wide Leg',
    price: 945,
    image: '/products/pantalones/modals/pantalon-gris-modal.webp',
    category: 'Pantalón Deportivo',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálido y confortable',
    ],
    colors: [
      { name: 'Gris', hex: '#767171', image: '/products/pantalones/modals/pantalon-gris-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC004060',
    name: 'Pato CLUB Pantalón Deportivo Azul – Wide Leg',
    price: 945,
    image: '/products/pantalones/modals/pantalon-azul-modal.webp',
    category: 'Pantalón Deportivo',
    description: 'Diseño de silueta amplia y caída fluida que acompaña cada movimiento, con bolsas invisibles, ajuste elástico y cordones regulables para una experiencia de confort y estilo.',
    features: [
      '70% Algodón – 30% Poliéster',
      'Afelpado suave para mayor confort térmico',
      'Cálido y confortable',
    ],
    colors: [
      { name: 'Azul', hex: '#0027A4', image: '/products/pantalones/modals/pantalon-azul-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC005010',
    name: 'Pato CLUB Camiseta Negra – Semi-Oversize',
    price: 645,
    image: '/products/camisetas/modals/camisa-negra-modal.webp',
    category: 'Camiseta',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante',
      'Cuello redondo reforzado',
    ],
    colors: [
      { name: 'negro', hex: '#000000', image: '/products/camisetas/modals/camisa-negra-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC005020',
    name: 'Pato CLUB Camiseta Blanca – Semi-Oversize',
    price: 645,
    image: '/products/camisetas/modals/camisa-blanca-modal.webp',
    category: 'Camiseta',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante',
      'Cuello redondo reforzado',
    ],
    colors: [
      { name: 'blanco', hex: '#FFFFFF', image: '/products/camisetas/modals/camisa-blanca-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC005030',
    name: 'Pato CLUB Camiseta Verde – Semi-Oversize',
    price: 645,
    image: '/products/camisetas/modals/camisa-verde-modal.webp',
    category: 'Camiseta',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante',
      'Cuello redondo reforzado',
    ],
    colors: [
      { name: 'verde', hex: '#484E30', image: '/products/camisetas/modals/camisa-verde-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC005040',
    name: 'Pato CLUB Camiseta Rojo Vino – Semi-Oversize',
    price: 645,
    image: '/products/camisetas/modals/camisa-vino-modal.webp',
    category: 'Camiseta',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante',
      'Cuello redondo reforzado',
    ],
    colors: [
      { name: 'Rojo Vino', hex: '#740000', image: '/products/camisetas/modals/camisa-vino-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC005050',
    name: 'Pato CLUB Camiseta Gris – Semi-Oversize',
    price: 645,
    image: '/products/camisetas/modals/camisa-gris-modal.webp',
    category: 'Camiseta',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante',
      'Cuello redondo reforzado',
    ],
    colors: [
      { name: 'Gris', hex: '#767171', image: '/products/camisetas/modals/camisa-gris-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  {
    id: 'PC005060',
    name: 'Pato CLUB Camiseta Azul – Semi-Oversize',
    price: 645,
    image: '/products/camisetas/modals/camisa-azul-modal.webp',
    category: 'Camiseta',
    description: 'Diseño minimalista, silueta moderna boxy, semi oversize, caída elegante, alto gramaje y confort para el día a día.',
    features: [
      '65% Rayón – 30% Nylon – 5% Spandex',
      'Suavidad, durabilidad y caída elegante',
      'Cuello redondo reforzado',
    ],
    colors: [
      { name: 'Azul', hex: '#0027A4', image: '/products/camisetas/modals/camisa-azul-modal.webp' },
    ],
    sizes: [ 'S', 'M', 'L', 'XL']
  },
  

];
