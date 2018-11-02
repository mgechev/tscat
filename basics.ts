/**
 * A category consists of two "collections" of
 * things called *objects* and *morphisms*.
 *
 * We write `C` for a category, `C0` for the
 * objects and `C1` for the morphisms. They satisfy
 * the following conditions.
 *
 * 1. Every morephism `f `is assiciated with two
 * objects (which may be the same) called
 * domain and codomain of `f`.
 */

type A = 'A';
type B = 'B';
type F<A, B> = (a: A) => B;

const f: F<A, B> = (a: A) => 'B';

/**
 * `dom(f)` is `A`, `codom(f)` is `B`. We write
 * `f:A -> B`.
 *
 * 2. Given `f: A -> B` and `g: B -> C` we say
 * `f` and `g` are composable (i.e.
 * `cod(f) = dom(g)).
 */

type C = 'C';

const g: F<B, C> = (b: B): C => 'C';

const compose = <X, Y, Z>(f: F<X, Y>, g: F<Y, Z>) => (a: X): Z => g(f(a));

console.log(compose(f, g)('A'));

/**
 * 3. Composition is associative: `(h.g).f = h.(g.f)`:
 */

type D = 'D';
type H = (c: C) => D;

const h: H = (c: C): D => 'D';

console.assert(
  compose(compose(h, g), f)('C') === compose(h, compose(g, f))('C')
);

/**
 * 4. For every object `A from C0` there's a unique morphism 1A: A -> A
 * such that for every `f: A -> B`, `f.1A = f` and for every
 * `g: C -> A`, `1A.g = g`.
 */

const id = <X>(a: X): X => a;

console.assert(
  compose(f, id)('A') === f('A') &&
  compose(id, g)('B') === g('B')
);

/**
 * 5. The collection of all the morphisms between `A` and `B` is denoted
 * `C(A, B)` or `Homc(A, B)` or just `Hom(A, B)`.
 */
