var mongoose = require('mongoose');
var Tarot	 = require('./models/tarot');

var cards = [
	{
		number: 0,
		name: 'The Fool',
		meaning: 'Beginnings, innocence, spontaneity, a free spirit',
		inversed: 'Holding back, recklessness, risk-taking',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 1,
		name: 'The Magician',
		meaning: 'Manifestation, resourcefulness, power, inspired action',
		inversed: 'Manipulation, poor planning, untapped talents',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 2,
		name: 'The High Priestess',
		meaning: 'Intuition, sacred knowledge, divine feminine, the subconsious mind',
		inversed: 'Secrets, disconnected from intuition, withdrawal and silence',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 3,
		name: 'The Empress',
		meaning: 'Femininity, beauty, nature, nurturing, abundance',
		inversed: 'Creative block, dependence on others',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 4,
		name: 'The Emperor',
		meaning: 'Authority, establishment, structure, a father figure',
		inversed: 'Domination, excessive control, lack of discipline, inflexibility',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 5,
		name: 'The Hierophant',
		meaning: 'Spiritual wisdom, religious beliefs, conformity, tradition, institutions',
		inversed: 'Personal beliefs, freedom, challenging the status quo',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 6,
		name: 'Lovers',
		meaning: 'Love, harmony, relationships, values, alignment, choices',
		inversed: 'Self-love, disharmony, imbalance, misalignment of values',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 7,
		name: 'The Chariot',
		meaning: 'Control, willpower, success, action, determination',
		inversed: 'Self-discipline, opposition, lack of direction',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 8,
		name: 'Strength',
		meaning: 'Strength, courage, persuasion, influence, compassion',
		inversed: 'Inner strength, self-doubt, low energy, raw emotion',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 9,
		name: 'Hermit',
		meaning: 'Soul-searching, introspection, being alone, inner guidance',
		inversed: 'Isolation, loneliness, withdrawal',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 10,
		name: 'Wheel of Fortune',
		meaning: 'Good luck, karma, life cycles, destiny, a turning point',
		inversed: 'Bad luck, resistance to change, breaking cycles',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 11,
		name: 'Justice',
		meaning: 'Justice, fairness, truth, cause and effect, law',
		inversed: 'Unfairness, lack of accountability, dishonesty',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 12,
		name: 'The Hanged Man',
		meaning: 'Pause, surrender, letting go, new perspectives',
		inversed: 'Delays, resistance, stalling, indecision',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 13,
		name: 'Death',
		meaning: 'Endings, change, transformation, transition',
		inversed: 'Resistance to change, personal transformation',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 14,
		name: 'Temperance',
		meaning: 'Balance, moderation, patience, purpose',
		inversed: 'Imbalance, excess, self-healing, re-alignment',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 15,
		name: 'Devil',
		meaning: 'Shadow self, attachment, addiction, restriction, sexuality',
		inversed: 'Releasing limiting beliefs, exploring dark thoughts, detachment',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 16,
		name: 'The Tower',
		meaning: 'Sudden change, upheaval, chaos, revelation, awakening',
		inversed: 'Personal transformation, fear of change, averting disaster',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 17,
		name: 'The Star',
		meaning: 'Hope, faith, purpose, renewal, spirituality',
		inversed: 'Lack of faith, despair, self-trust, disconnection',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 18,
		name: 'The Moon',
		meaning: 'Illusion, fear, anxiety, subconsious, intuition',
		inversed: 'Release of fear, repressed emotion, inner confusion',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 19,
		name: 'The Sun',
		meaning: 'Positivity, fun, warmth, success, vitality',
		inversed: 'Inner child, feeling down, overly optimistic',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 20,
		name: 'Judgement',
		meaning: 'Judgement, rebirth, inner calling, absolution',
		inversed: 'Self-doubt, inner critic, ignoring the call',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 21,
		name: 'The World',
		meaning: 'Completion, integration, accomplishment, travel',
		inversed: 'Seeking personal closure, short-cuts, delays',
		suit: 'Major Arcana',
		isInverted: false
	},
	{
		number: 1,
		name: 'Ace of Cups',
		meaning: 'Love, new relationships, compassion, creativity',
		inversed: 'Self-love, intuition, repressed emotions',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 2,
		name: 'Two of Cups',
		meaning: 'Unified love, partnership, mutual attraction',
		inversed: 'Self-love, break-ups, disharmony, distrust',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 3,
		name: 'Three of Cups',
		meaning: 'Celebration, friendship, creativity, collaborations',
		inversed: 'Independence, alone-time, hardcore partying, (three is a crowd)',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 4,
		name: 'Four of Cups',
		meaning: 'Meditation, contemplation, apathy, reevaluation',
		inversed: 'Retreat, withdrawal, checking in for alignment',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 5,
		name: 'Five of Cups',
		meaning: 'Regret, failure, disappointment, pessimism',
		inversed: 'Personal setbacks, self-forgiveness, moving on',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 6,
		name: 'Six of Cups',
		meaning: 'Revisiting the past, childhood memories, innocence, joy',
		inversed: 'Living in the past, forgiveness, lacking playfulness',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 7,
		name: 'Seven of Cups',
		meaning: 'Opportunities, choices, wishful thinking, illusion',
		inversed: 'Alignment, personal values, overwhelmed by choices',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 8,
		name: 'Eight of Cups',
		meaning: 'Disappointment, abandonment, withdrawal, escapism',
		inversed: 'Trying one more time, indecision, aimless drifting, walking away',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 9,
		name: 'Nine of Cups',
		meaning: 'Contentment, satisfaction, gratitude, wish come true',
		inversed: 'Inner happiness, materialism, dissatisfaction, indulgence',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 10,
		name: 'Ten of Cups',
		meaning: 'Divine love, blissful relationships, harmony, alignment',
		inversed: 'Disconnection, misaligned values, struggling relationships',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 11,
		name: 'Page of Cups',
		meaning: 'Creative opportunities, intuitive messages, curiosity, possibility',
		inversed: 'New ideas, doubting intuition, creative blocks, emotional immaturity',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 12,
		name: 'Knight of Cups',
		meaning: 'Creativity, romance, charm, imagination, beauty',
		inversed: 'Overactive imagination, unrealistic, jealous, moody',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 13,
		name: 'Queen of Cups',
		meaning: 'Compassionate, caring, emotionally stable, intuitive, in flow',
		inversed: 'Inner feelings, self-care, self-love, co-dependency',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 14,
		name: 'King of Cups',
		meaning: 'Emotionally balanced, compassionate, diplomatic',
		inversed: 'Self-compassion, inner feelings, moodiness, emotionally manipulative',
		suit: 'Cups',
		isInverted: false
	},
	{
		number: 1,
		name: 'Ace of Swords',
		meaning: 'Breakthroughs, new ideas, mental clarity, success',
		inversed: 'Inner clarity, re-thinking an idea, clouded judgement',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 2,
		name: 'Two of Swords',
		meaning: 'Difficult decisions, weighing up options, an impasse, avoidance',
		inversed: 'Indecision, confusion, information overload, stalemate',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 3,
		name: 'Three of Swords',
		meaning: 'Heartbreak, emotional pain, sorrow, grief, hurt',
		inversed: 'Negative self-talk, releasing pain, optimisim, forgiveness',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 4,
		name: 'Four of Swords',
		meaning: 'Rest, relaxation, meditation, contemplation, recuperation',
		inversed: 'Exhaustion, burn-out, deep contemplation, stagnation',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 5,
		name: 'Five of Swords',
		meaning: 'Conflict, disagreements, competition, defeat, winning at all costs',
		inversed: 'Reconciliation, making amends, past resentment',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 6,
		name: 'Six of Swords',
		meaning: 'Transition, change, rite of passage, releasing baggage',
		inversed: 'Personal transition, resistance to change, unfinished business',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 7,
		name: 'Seven of Swords',
		meaning: 'Betrayal, deception, getting away with something, acting stategically',
		inversed: 'Imposter syndrome, self-deceit, keeping secrets',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 8,
		name: 'Eight of Swords',
		meaning: 'Negative thoughts, self-imposed restriction, imprisonment, victim mentality',
		inversed: 'Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 9,
		name: 'Nine of Swords',
		meaning: 'Anxiety, worry, fear, depression, nightmares',
		inversed: 'Inner turmoil, deep-seated fears, secrets, releasing worry',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 10,
		name: 'Ten of Swords',
		meaning: 'Painful endings, deep wounds, betrayal, loss, crisis',
		inversed: 'Recovery, regeneration, resisting an inevitable end',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 11,
		name: 'Page of Swords',
		meaning: 'New ideas, curiosity, thirst for knowledge, new ways of communicating',
		inversed: 'Self-expression, all talk and no action, haphazard action, haste',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 12,
		name: 'Knight of Swords',
		meaning: 'Ambitious, action-oriented, driven to succeed, fast-thinking',
		inversed: 'Restless, unfocused, impulsive, burn-out',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 13,
		name: 'Queen of Swords',
		meaning: 'Independent, unbiased judgement, clear boundaries, direct communication',
		inversed: 'Overly-emotional, easily influenced, bitchy, cold-hearted',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 14,
		name: 'King of Swords',
		meaning: 'Mental clarity, intellectual power, authority, truth',
		inversed: 'Quiet power, inner truth, misuse of power, manipulation',
		suit: 'Swords',
		isInverted: false
	},
	{
		number: 1,
		name: 'Ace of Pentacles',
		meaning: 'A new financial or career opportunity, manifestation, abundance',
		inversed: 'Lost opportunity, lack of planning and foresight',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 2,
		name: 'Two of Pentacles',
		meaning: 'Multiple priorities, time management, prioritisation, adaptability',
		inversed: 'Over-committed, disorganisation, reprioritisation',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 3,
		name: 'Three of Pentacles',
		meaning: 'Teamwork, collaboration, learning, implementation',
		inversed: 'Disharmony, misalignment, working alone',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 4,
		name: 'Four of Pentacles',
		meaning: 'A new financial or career opportunity, manifestation, abundance',
		inversed: 'Over-spending, greed, self-protection',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 5,
		name: 'Five of Pentacles',
		meaning: 'Financial loss, poverty, lack mindset, isolation, worry',
		inversed: 'Recovery from financial loss, spiritual poverty',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 6,
		name: 'Six of Pentacles',
		meaning: 'Giving, receiving, sharing wealth, generosity, charity',
		inversed: 'Self-care, unpaid debts, one-sided charity',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 7,
		name: 'Seven of Pentacles',
		meaning: 'Long-term view, sustainable results, perseverance, investment',
		inversed: 'Lack of long-term vision, limited success or reward',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 8,
		name: 'Eight of Pentacles',
		meaning: 'Apprenticeship, repetitive tasks, mastery, skill development',
		inversed: 'Self-development, perfectionism, misdirected activity',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 9,
		name: 'Nine of Pentacles',
		meaning: 'Abundance, luxury, self-sufficiency, financial independence',
		inversed: 'Self-worth, over-investment in work, hustling',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 10,
		name: 'Ten of Pentacles',
		meaning: 'Wealth, financial security, family, long-term success, contribution',
		inversed: 'The dark side of wealth, financial failure or loss',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 11,
		name: 'Page of Pentacles',
		meaning: 'Manifestation, financial opportunity, skill development',
		inversed: 'Lack of progress, procrastination, learn from failure',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 12,
		name: 'Knight of Pentacles',
		meaning: 'Hard work, productivity, routine, conservatism',
		inversed: 'Self-discipline, boredom, feeling stuck, perfectionism',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 13,
		name: 'Queen of Pentacles',
		meaning: 'Nurturing, praticial, providing financially, a working parent',
		inversed: 'Financial independence, self-care, work-home conflict',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 14,
		name: 'King of Pentacles',
		meaning: 'Wealth, business, leadership, security, discipline, abundance',
		inversed: 'Financially inept, obsessed with wealth and status, stubbord',
		suit: 'Pentacles',
		isInverted: false
	},
	{
		number: 1,
		name: 'Ace of Wands',
		meaning: 'Inspiration, new opportunities, growth, potential',
		inversed: 'An emerging idea, lack of direction, distractions, delays',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 2,
		name: 'Two of Wands',
		meaning: 'Future planning, progress, decisions, discovery',
		inversed: 'Personal goals, inner alignment, fear of unknown, lack of planning',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 3,
		name: 'Three of Wands',
		meaning: 'Progress, expansion, foresight, overseas opportunities',
		inversed: 'Playing small, lack of foresight, unexpected delays',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 4,
		name: 'Four of Wands',
		meaning: 'Celebration, joy, harmony, relaxation, homecoming',
		inversed: 'Personal celebration, inner harmony, conflict with others, transition',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 5,
		name: 'Five of Wands',
		meaning: 'Conflict, disagreements, competition, tension, diversity',
		inversed: 'Inner conflict, conflict avoidance, tension release',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 6,
		name: 'Six of Wands',
		meaning: 'Success, public recognition, progress, self-confidence',
		inversed: 'Private achievement, personal definition of success, fall from prace, egotism',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 7,
		name: 'Seven of Wands',
		meaning: 'Challenge, competition, protection, perseverance',
		inversed: 'Exhaustion, giving up, overwhelmed',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 8,
		name: 'Eight of Wands',
		meaning: 'Movement, fast paced change, action, alignment, air travel',
		inversed: 'Delays, frustration, resisting change, internal alignment',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 9,
		name: 'Nine of Wands',
		meaning: 'Resilience, courage, persistence, test of faith, boundaries',
		inversed: 'Inner resources, struggle, overwhelm, defensive, paranoia',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 10,
		name: 'Ten of Wands',
		meaning: 'Burden, extra responsibility, hard work, completion',
		inversed: 'Doing it all, carrying the burden, delegation, release',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 11,
		name: 'Page of Wands',
		meaning: 'Inspiration, ideas, discovery, limitless potential, free spirit',
		inversed: 'Newly-formed ideas redirecting energy, self-limiting beliefs, a spiritual path',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 12,
		name: 'Knight of Wands',
		meaning: 'Energy, passion, inspired action, adventure, impulsiveness',
		inversed: 'Passion project, haste, scattered energy, delays, frustration',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 13,
		name: 'Queen of Wands',
		meaning: 'Courage, confidence, independence, social butterfly, determination',
		inversed: 'Self-respect, self-confidence, introverted, re-establish sense of self',
		suit: 'Wands',
		isInverted: false
	},
	{
		number: 14,
		name: 'King of Wands',
		meaning: 'Natural-born leader, vision, entrepreneur, honour',
		inversed: 'Impulsiveness, haste, ruthless, high expectations',
		suit: 'Wands',
		isInverted: false
	},
];

async function seedDB() {
	await Tarot.deleteMany({});
	for(const card of cards) {
		let deck = await Tarot.create(card);
		deck.save();
	}
} 

module.exports = seedDB;