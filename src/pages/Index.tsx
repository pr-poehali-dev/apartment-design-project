import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>('kitchen');

  const rooms = [
    {
      id: 'kitchen',
      name: 'Кухня',
      icon: 'ChefHat',
      area: '16.81 м²',
      image: 'https://cdn.poehali.dev/projects/3fea0af0-b8ee-4308-ad8f-cb76d5ba6d29/files/6c7b4cb9-da92-45a2-a3cb-96ba06751723.jpg',
      features: [
        'Темно-синие фасады',
        'Латунная фурнитура',
        'Кварцевая столешница',
        'Золотые светильники',
        'Открытые полки'
      ],
      description: 'Элегантная кухня в стиле contemporary с темными фасадами глубокого синего цвета. Латунные акценты и геометрическая плитка добавляют роскоши.'
    },
    {
      id: 'hallway',
      name: 'Прихожая',
      icon: 'DoorOpen',
      area: '3.28 м²',
      image: 'https://cdn.poehali.dev/projects/3fea0af0-b8ee-4308-ad8f-cb76d5ba6d29/files/86173247-c7ab-49f3-8a5f-db7ae1b9b0c1.jpg',
      features: [
        'Деревянные панели',
        'Латунное зеркало',
        'Консольный столик',
        'Текстурные обои',
        'Акцентное освещение'
      ],
      description: 'Изысканная прихожая с темными деревянными панелями и латунными акцентами. Создает эффектное первое впечатление от квартиры.'
    }
  ];

  const materials = [
    { name: 'Темно-синий', type: 'Фасады кухни', color: '#1e3a5f' },
    { name: 'Латунь', type: 'Акценты', color: '#B8860B' },
    { name: 'Белый кварц', type: 'Столешница', color: '#FAFAFA' },
    { name: 'Темное дерево', type: 'Панели', color: '#3d2817' }
  ];

  const currentRoom = rooms.find(room => room.id === selectedRoom);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Дизайн-проект
          </Badge>
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Квартира 46.85 м²
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Элегантный интерьер с благородными темными оттенками и латунными акцентами
          </p>
        </header>

        <div className="mb-12">
          <img 
            src="https://cdn.poehali.dev/files/78ae4a34-9c64-4394-bd93-1b3df82e768b.jpg" 
            alt="Планировка квартиры"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room) => (
            <Card 
              key={room.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedRoom === room.id ? 'ring-2 ring-primary shadow-xl scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
              onClick={() => setSelectedRoom(room.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${selectedRoom === room.id ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                  <Icon name={room.icon as any} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{room.name}</h3>
                  <p className="text-gray-500">{room.area}</p>
                </div>
                {selectedRoom === room.id && (
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                )}
              </div>
            </Card>
          ))}
        </div>

        {currentRoom && (
          <div className="animate-fade-in">
            <Card className="overflow-hidden shadow-2xl">
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src={currentRoom.image}
                  alt={currentRoom.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white text-lg py-2 px-4">
                    {currentRoom.name}
                  </Badge>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {currentRoom.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Sparkles" size={20} className="text-primary" />
                      Особенности
                    </h4>
                    <ul className="space-y-3">
                      {currentRoom.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Ruler" size={20} className="text-primary" />
                      Параметры
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Площадь</span>
                        <span className="font-semibold">{currentRoom.area}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Стиль</span>
                        <span className="font-semibold">Современный</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Освещение</span>
                        <span className="font-semibold">Многоуровневое</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="mt-12">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Palette" size={28} className="text-primary" />
              <h3 className="text-3xl font-bold">Палитра материалов</h3>
            </div>
            
            <div className="mb-6">
              <img 
                src="https://cdn.poehali.dev/projects/3fea0af0-b8ee-4308-ad8f-cb76d5ba6d29/files/b5a5e33c-20d2-4653-9094-72533ad2bb50.jpg"
                alt="Палитра материалов"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {materials.map((material, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-primary transition-colors"
                >
                  <div 
                    className="w-full h-24 rounded-lg mb-3 shadow-sm"
                    style={{ backgroundColor: material.color }}
                  ></div>
                  <h5 className="font-semibold text-gray-900 mb-1">{material.name}</h5>
                  <p className="text-sm text-gray-500">{material.type}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            <Icon name="Download" className="mr-2" size={20} />
            Скачать проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;