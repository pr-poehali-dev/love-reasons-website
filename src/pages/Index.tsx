import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const loveReasons = [
  "За то, что твоя улыбка делает мой день ярче.",
  "За то, что ты умеешь слушать и понимать меня.",
  "За то, что твой смех — самый искренний звук на свете.",
  "За то, что ты поддерживаешь меня в любых ситуациях.",
  "За то, что твои глаза полны тепла и доброты.",
  "За то, что ты вдохновляешь меня становиться лучше.",
  "За то, что с тобой я чувствую себя собой.",
  "За то, что ты находишь радость в мелочах.",
  "За то, что твоя забота обо мне безгранична.",
  "За то, что ты всегда знаешь, как поднять мне настроение.",
  "За то, что твоя нежность согревает моё сердце.",
  "За то, что ты умна и с тобой интересно разговаривать.",
  "За то, что ты веришь в меня, даже когда я сомневаюсь.",
  "За то, что твои объятия — моё самое безопасное место.",
  "За то, что ты красива даже без макияжа.",
  "За то, что ты умеешь прощать и не держишь зла.",
  "За то, что с тобой я чувствую, что всё возможно.",
  "За то, что ты мотивируешь меня на достижение целей.",
  "За то, что твоё чувство юмора идеально сочетается с моим.",
  "За то, что ты всегда находишь время для меня.",
  "За то, что ты умеешь удивлять.",
  "За то, что твой голос успокаивает меня.",
  "За то, что ты не боишься быть искренней.",
  "За то, что ты помнишь даже маленькие детали о нас.",
  "За то, что ты делаешь обычные дни особенными.",
  "За то, что ты терпелива со мной.",
  "За то, что ты умеешь прощать мои ошибки.",
  "За то, что ты всегда стараешься понять меня.",
  "За то, что ты даришь мне ощущение дома.",
  "За то, что ты веришь в нашу любовь.",
  "За то, что ты нежная и сильная одновременно.",
  "За то, что ты умеешь выслушать, даже когда устала.",
  "За то, что ты делаешь мою жизнь насыщеннее.",
  "За то, что ты всегда находишь слова поддержки.",
  "За то, что ты уважаешь мои интересы.",
  "За то, что ты не переделываешь меня, а принимаешь.",
  "За то, что ты умеешь признавать свои ошибки.",
  "За то, что ты делаешь меня счастливее каждый день.",
  "За то, что ты умеешь любить по-настоящему.",
  "За то, что ты — моя самая большая удача.",
  "За то, что твои руки такие тёплые и нежные.",
  "За то, что ты запоминаешь мои любимые песни.",
  "За то, что у нас есть свои глупые шутки, которые никто не понимает.",
  "За то, что ты всегда замечаешь, когда мне грустно.",
  "За то, что ты умеешь молча поддержать, просто обняв.",
  "За то, что ты у меня самая милая девочка на свете.",
  "За то, что ты терпишь мои странные привычки.",
  "За то, что ты у меня самая милая.",
  "За то, что ты красивая у меня самая дурашка.",
  "За то, что ты веришь в меня больше, чем я сам.",
  "За то, что ты не стесняешься дурачиться со мной.",
  "За то, что ты берёшь мою руку, когда переходим дорогу.",
  "За то, что ты делаешь милые подарки мне.",
  "За то, что ты не побоялась познакомить меня с родителями.",
  "За то, что ты скучаешь, даже если мы не виделись всего пару часов.",
  "За то, что ты хранишь нашу любовь.",
  "За то, что ты соглашаешься смотреть со мной что-то, даже если тебе неинтересно.",
  "За то, что ты не ругаешься, когда я иногда тебя не понимаю.",
  "За то, что ты знаешь, как мне помочь при грусти.",
  "За то, что ты всегда делишься со мной своими мыслями.",
  "За то, что ты прощаешь мои опоздания.",
  "За то, что ты умеешь выслушать мои глупые идеи.",
  "За то, что ты не смеешься, когда я пою.",
  "За то, что ты всегда находишь мои потерянные мысли.",
  "За то, что ты смотришь на меня так, будто я самый лучший человек на свете.",
  "За то, что ты заботишься о моем здоровье.",
  "За то, что ты учишь меня новым вещам.",
  "За то, что ты часто пишешь что скучаешь и любишь (шучу, нужно намного больше).",
  "За то, что ты всегда знаешь, что сказать.",
  "За то, что ты делаешь обычный вечер праздником.",
  "За то, что ты умеешь просыпаться красивой.",
  "За то, что ты терпишь мои повадки.",
  "За то, что ты не боишься показать свои слабости.",
  "За то, что ты всегда прислушиваешься ко мне.",
  "За то, что ты умеешь хранить меня.",
  "За то, что ты не перебиваешь, когда я рассказываю историю.",
  "За то, что ты напоминаешь мне пить таблетки, когда я болею.",
  "За то, что ты знаешь все мои раны и шрамы.",
  "За то, что ты самая лучшая девочка у меня.",
  "За то, что ты всегда находишь повод для праздника.",
  "За то, что ты утешаешь меня, когда я болею.",
  "За то, что ты пишешь первой часто, хоть щас уже мы пишем оба первыми, и никто чаще, а одинаково.",
  "За то, что ты не злишься на меня.",
  "За то, что ты всегда замечаешь что что-то не так.",
  "За то, что ты не критикуешь мой музыкальный вкус.",
  "За то, что ты веришь в наши общие мечты.",
  "За то, что ты делаешь мой мир теплее и ярче.",
  "За то, что ты не сдаешься, даже когда трудно.",
  "За то, что ты веришь в наши общие мечты.",
  "За то, что в самые нужные моменты, ты всегда рядом (самые нужные моменты всегда) потому что ты всегда рядом.",
  "За то, что мне просто напросто не нужны причины, чтобы любить тебя дурашка, я тебя просто очень сильно люблю❤️"
];

const LoveReasonsPage = () => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const revealCard = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards([...revealedCards, index]);
    }
  };

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
          почему я тебя люблю, дурашка
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded"></div>
          <Icon name="Heart" className="w-6 h-6 text-pink-500" />
          <div className="h-1 w-12 bg-gradient-to-r from-pink-600 to-pink-400 rounded"></div>
        </div>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Нажимай на карточки и открывай каждую причину моей любви к тебе... 💕
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
              <div className="mt-4 p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg">
                <p className="text-sm text-pink-700 font-medium mb-2">
                  🎉 Все причины открыты!
                </p>
                <p className="text-xs text-pink-600">
                  Теперь ты знаешь все 91 причину, почему я тебя так сильно люблю ❤️
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Final Message */}
      {revealedCards.length === 91 && (
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 rounded-3xl p-8 shadow-xl border border-pink-200">
            <Icon name="Heart" className="w-12 h-12 mx-auto text-red-500 heart-pulse mb-6" />
            <h2 className="font-playfair text-3xl font-bold text-pink-700 mb-6">
              С любовью к самой лучшей девочке 💕
            </h2>
            <p className="text-lg text-pink-600 leading-relaxed mb-4">
              Каждый день с тобой — это новая причина полюбить тебя еще больше.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <Icon name="Sparkles" className="w-6 h-6 text-pink-400" />
              <Icon name="Heart" className="w-6 h-6 text-red-400" />
              <Icon name="Sparkles" className="w-6 h-6 text-pink-400" />
            </div>
            <p className="text-base text-pink-700 font-playfair italic">
              Твой, который тебя очень сильно любит ❤️
            </p>
          </div>
        </div>
      )}

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-pink-300 text-2xl animate-bounce">💕</div>
        <div className="absolute top-1/3 right-1/4 text-rose-300 text-xl animate-pulse">❤️</div>
        <div className="absolute bottom-1/4 left-1/3 text-pink-400 text-lg animate-bounce">💖</div>
        <div className="absolute bottom-1/3 right-1/3 text-red-300 text-2xl animate-pulse">💝</div>
        <div className="absolute top-1/2 left-1/6 text-pink-200 text-sm animate-pulse">💗</div>
        <div className="absolute top-3/4 right-1/6 text-rose-200 text-lg animate-bounce">💓</div>
      </div>
    </div>
  );
};

export default LoveReasonsPage;