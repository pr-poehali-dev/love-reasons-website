import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const loveReasons = [
  "За твою невероятную улыбку, которая освещает мой день",
  "За то, как ты смеешься над моими глупыми шутками",
  "За твою доброту к окружающим",
  "За то, как ты заботишься о мне",
  "За твои объятия, в которых я чувствую себя дома",
  "За твою поддержку во всех моих начинаниях",
  "За то, как ты готовишь мой любимый завтрак",
  "За твою способность утешить меня одним словом",
  "За то, как красиво ты танцуешь под любимую песню",
  "За твою искренность и честность",
  "За то, как ты читаешь книги с таким увлечением",
  "За твою любовь к животным",
  "За то, как ты поешь в душе",
  "За твое терпение, когда я опаздываю",
  "За твою мечтательность и веру в лучшее",
  "За то, как ты выбираешь наряды с особой тщательностью",
  "За твою способность находить красоту в простых вещах",
  "За то, как ты обнимаешь подушку во сне",
  "За твою любовь к сладкому и мороженому",
  "За то, как ты морщишь носик, когда недовольна",
  "За твою заботу о близких",
  "За то, как ты радуешься маленьким подаркам",
  "За твою способность запоминать важные даты",
  "За то, как ты укрываешь меня одеялом ночью",
  "За твою любовь к романтическим фильмам",
  "За то, как ты переживаешь за героев книг",
  "За твою нежность и ласку",
  "За то, как ты делишься со мной своими мыслями",
  "За твою способность делать обычный день особенным",
  "За то, как ты держишь мою руку",
  "За твою мудрость в трудных ситуациях",
  "За то, как ты украшаешь наш дом",
  "За твою любовь к путешествиям и новым местам",
  "За то, как ты фотографируешь закаты",
  "За твою способность слушать и понимать",
  "За то, как ты заботишься о цветах",
  "За твою любовь к музыке и концертам",
  "За то, как ты готовишь чай с особой любовью",
  "За твою способность находить компромиссы",
  "За то, как ты поддерживаешь мои мечты",
  "За твою искреннюю радость за других",
  "За то, как ты планируешь наши свидания",
  "За твою любовь к рассветам и закатам",
  "За то, как ты говоришь 'доброе утро'",
  "За твою способность прощать мои ошибки",
  "За то, как ты выбираешь подарки для друзей",
  "За твою любовь к дождю и уютным вечерам",
  "За то, как ты засыпаешь, прижавшись ко мне",
  "За твою веру в нас и наше будущее",
  "За то, как ты делаешь каждый день лучше",
  "За твою способность видеть хорошее в людях",
  "За то, как ты украшаешь праздники",
  "За твою любовь к семейным традициям",
  "За то, как ты заботишься о моем здоровье",
  "За твою способность создавать уют везде",
  "За то, как ты помнишь наши первые встречи",
  "За твою любовь к звездному небу",
  "За то, как ты делишься секретами только со мной",
  "За твою способность быть собой",
  "За то, как ты вдохновляешь меня на лучшее",
  "За твою любовь к детям и животным",
  "За то, как ты создаешь магию в обычных моментах",
  "За твою способность быть сильной, когда нужно",
  "За то, как ты веришь в любовь",
  "За твою уникальность и неповторимость",
  "За то, как ты делаешь мир ярче",
  "За твою способность любить искренне",
  "За то, как ты принимаешь мои недостатки",
  "За твою мечту о нашем общем доме",
  "За то, как ты говоришь 'я тебя люблю'",
  "За твою способность быть лучшим другом",
  "За то, как ты делишься своим сердцем",
  "За твою веру в чудеса",
  "За то, как ты создаешь воспоминания",
  "За твою способность дарить счастье",
  "За то, как ты любишь наши традиции",
  "За твою нежность к моим чувствам",
  "За то, как ты строишь планы на будущее",
  "За твою способность быть рядом",
  "За то, как ты делаешь каждый поцелуй особенным",
  "За твою веру в нашу любовь",
  "За то, как ты принимаешь все мои 'я тебя люблю'",
  "За твою способность быть моим домом",
  "За то, как ты любишь меня каждый день",
  "За твое терпение к моим странностям",
  "За то, как ты делишься мечтами",
  "За твою способность делать меня лучше",
  "За то, как ты веришь в нас",
  "За твою любовь ко всему прекрасному",
  "За то, как ты создаешь нашу историю",
  "За твою способность быть моей музой",
  "За то, как ты любишь жизнь",
  "За твою веру в любовь с первого взгляда",
  "За то, как ты делаешь меня счастливым каждый день"
];

const LoveReasonsPage = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const revealCard = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards([...revealedCards, index]);
    }
  };

  const handleSecretClick = () => {
    setShowSurprise(true);
  };

  if (showSurprise) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Heart" className="w-20 h-20 mx-auto text-pink-500 heart-pulse mb-6" />
          </div>
          <h1 className="font-playfair text-6xl font-bold text-pink-600 mb-8">
            Сюрприз! 💕
          </h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
              Это была всего лишь небольшая часть того, как сильно я тебя люблю. 
              Каждый день с тобой - это новая причина полюбить тебя еще больше.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <Icon name="Sparkles" className="w-8 h-8 text-pink-400" />
              <Icon name="Heart" className="w-8 h-8 text-red-400" />
              <Icon name="Sparkles" className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-xl text-pink-600 font-playfair italic">
              С любовью, твой космонавт в океане чувств 🚀❤️
            </p>
          </div>
          <Button 
            onClick={() => setShowSurprise(false)}
            className="mt-8 love-gradient text-white px-8 py-3 text-lg rounded-full hover:shadow-lg transition-all"
          >
            Вернуться к причинам
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 pt-12">
        <div className="mb-8">
          <Icon name="Heart" className="w-16 h-16 mx-auto text-pink-500 heart-pulse mb-4" />
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-pink-600 mb-6">
          91 причина
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-playfair italic">
          почему я тебя люблю
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded"></div>
          <Icon name="Heart" className="w-6 h-6 text-pink-500" />
          <div className="h-1 w-12 bg-gradient-to-r from-pink-600 to-pink-400 rounded"></div>
        </div>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Нажимай на карточки и открывай каждую причину... 
          А в самом конце тебя ждет особенный сюрприз 💕
        </p>
      </div>

      {/* Love Reasons Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {loveReasons.map((reason, index) => (
            <Card 
              key={index}
              className={`love-card cursor-pointer ${
                revealedCards.includes(index) 
                  ? 'bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200' 
                  : 'bg-white/80 border-pink-100 hover:border-pink-200'
              }`}
              onClick={() => revealCard(index)}
            >
              <CardContent className="p-6 h-48 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-pink-500 bg-pink-100 px-3 py-1 rounded-full">
                    #{index + 1}
                  </span>
                  <Icon 
                    name={revealedCards.includes(index) ? "Heart" : "Lock"} 
                    className={`w-5 h-5 ${
                      revealedCards.includes(index) ? 'text-pink-500' : 'text-gray-400'
                    }`} 
                  />
                </div>
                
                {revealedCards.includes(index) ? (
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {reason}
                  </p>
                ) : (
                  <div className="flex flex-col items-center justify-center flex-1">
                    <Icon name="Gift" className="w-8 h-8 text-pink-300 mb-2" />
                    <p className="text-sm text-gray-400 text-center">
                      Нажми, чтобы открыть причину
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Special 91st Card */}
          <Card 
            className="love-card cursor-pointer bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 border-pink-300 border-2 relative overflow-hidden"
            onClick={() => revealCard(90)}
          >
            <CardContent className="p-6 h-48 flex flex-col justify-between relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-transparent"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-sm font-bold text-white bg-pink-500 px-3 py-1 rounded-full shadow-lg">
                  #91 ✨
                </span>
                <Icon 
                  name={revealedCards.includes(90) ? "Heart" : "Star"} 
                  className={`w-6 h-6 ${
                    revealedCards.includes(90) ? 'text-red-500' : 'text-pink-600'
                  }`} 
                />
              </div>
              
              {revealedCards.includes(90) ? (
                <div className="relative z-10">
                  <p className="text-lg font-semibold text-pink-800 leading-relaxed mb-4 font-playfair">
                    А 91-я причина особенная...
                  </p>
                  <p className="text-base text-pink-700 font-medium">
                    Мне не нужны причины, чтобы любить тебя. Я просто люблю. ❤️
                  </p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSecretClick();
                    }}
                    className="mt-4 bg-pink-600 hover:bg-pink-700 text-white text-xs px-4 py-2 rounded-full"
                  >
                    Сюрприз 🎁
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center flex-1 relative z-10">
                  <Icon name="Sparkles" className="w-10 h-10 text-pink-600 mb-2" />
                  <p className="text-sm text-pink-700 text-center font-semibold">
                    Особенная причина ✨
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
            <h3 className="font-playfair text-2xl font-semibold text-pink-600 mb-4">
              Прогресс открытия
            </h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Открыто причин:</span>
              <span className="text-sm font-semibold text-pink-600">
                {revealedCards.length} из 91
              </span>
            </div>
            <div className="w-full bg-pink-100 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-pink-400 to-pink-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(revealedCards.length / 91) * 100}%` }}
              ></div>
            </div>
            {revealedCards.length === 91 && (
              <p className="text-sm text-pink-600 mt-3 font-medium">
                🎉 Все причины открыты! Теперь можешь перейти к сюрпризу!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-pink-300 text-2xl animate-bounce">💕</div>
        <div className="absolute top-1/3 right-1/4 text-rose-300 text-xl animate-pulse">❤️</div>
        <div className="absolute bottom-1/4 left-1/3 text-pink-400 text-lg animate-bounce">💖</div>
        <div className="absolute bottom-1/3 right-1/3 text-red-300 text-2xl animate-pulse">💝</div>
      </div>
    </div>
  );
};

export default LoveReasonsPage;