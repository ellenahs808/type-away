
class Words {
    constructor(ctx, canvas) {
        this.words = ['add', 'algorithm', 'array', 'backend', 'binary', 'break', 'boolean', 'bracket', 'branch', 'browse', 'bug', 'camelcase', 'callback', 'character', 'class', 'closure', 'code', 'comment', 'compiler', 'compute', 'computer', 'concatenation', 'conditional', 'constant', 'constructor', 'control', 'constraints', 'compressor', 'curly', 'curry', 'data', 'dataflow', 'debug', 'debugger', 'debugging', 'declaration', 'declarative', 'declare', 'decompiler', 'decrement', 'deductive', 'dependent', 'developer', 'diff', 'direct', 'discrete', 'do', 'div', 'dom', 'dump', 'dynamic', 'element', 'else', 'elsif', 'embedded', 'encapsulation', 'encode', 'equal', 'error', 'escape', 'eval', 'event', 'exception', 'exists', 'exponent', 'expression', 'false', 'flag', 'float', 'for', 'foreach', 'framework', 'frontend', 'fullstack', 'function', 'functional', 'fizzbuzz', 'anagram', 'game', 'git', 'github', 'glitch', 'hash', 'heap', 'heroku', 'html', 'hypertext', 'immutable', 'imperative', 'implicit', 'increment', 'inherent', 'inherit', 'inheritance', 'inline', 'input', 'instance', 'instantiation', 'instructions', 'integer', 'integrated', 'integer', 'intermediate', 'interpreted', 'invalid', 'iteration', 'javascript', 'jbuilder', 'json', 'label', 'language', 'library', 'lifecycle', 'links', 'linker', 'literal', 'local', 'logical', 'logic', 'lookup', 'loop', 'loophole', 'machine', 'map', 'markup', 'math', 'memoization', 'metacharacter', 'metaclass', 'metalanguage', 'metaprogramming', 'method', 'middleware', 'module', 'modulo', 'native', 'nested', 'node', 'nodelist', 'null', 'object', 'objective', 'oriented', 'onmouseover', 'oop', 'open', 'operator', 'overflow', 'overload', 'package', 'parenthesis', 'parse', 'pascal', 'persistent', 'phrase', 'pipe', 'pixel', 'pointer', 'polymorphism', 'pop', 'positional', 'private', 'procedure', 'procedural', 'process', 'program', 'programmable', 'programming', 'pseudo', 'pseudocode', 'pseudolanguage', 'public', 'push', 'random', 'react', 'real', 'recompile', 'recursion', 'recursive', 'regex', 'regular', 'relational', 'remark', 'repeat', 'return', 'reverse', 'revision', 'routine', 'route', 'routing', 'ruby', 'rails', 'runtime', 'run', 'schema', 'scratch', 'section', 'secure', 'security', 'seed', 'separator', 'sequence', 'server', 'shell', 'shift', 'simulated', 'snippet', 'software', 'source', 'spaghetti', 'sparse', 'special', 'spooling', 'sql', 'sqlite', 'stack', 'standard', 'statement', 'stream', 'strong', 'stylesheet', 'submit', 'subprogram', 'subscript', 'substring', 'switch', 'syntactic', 'syntax', 'system', 'ternary', 'theoretical', 'operator', 'thread', 'threading', 'thunk', 'token', 'toolbox', 'transcompiler', 'true', 'trunk', 'undefined', 'unit', 'unshift', 'value', 'var', 'variable', 'vector', 'visual', 'web', 'while', 'whole', 'workspace', 'xor', 'yaml', 'webpack', 'salting', 'range', 'prime', 'magic', 'number', 'reverse', 'index', 'min', 'max', 'cipher', 'multiple', 'hipsterfy', 'snakecase', 'select', 'reduce', 'reducer', 'palindrome', 'laligat', 'vowel', 'bigram', 'streak', 'pyramid', 'negative', 'positive', 'string', 'stringify', 'coprime', 'merge', 'bubblesort', 'quicksort', 'symmetrical', 'digital', 'root', 'notation', 'linearithmic', 'logarithmic', 'exponential', 'constant', 'pair', 'pairing', 'factorial', 'querying', 'tables', 'rails', 'react', 'redux', 'convention', 'coalesce', 'aggregate', 'distinct', 'subquery', 'migration', 'bind', 'production', 'development', 'test', 'log', 'create', 'generate', 'terminal', 'validations', 'models', 'controllers', 'associations', 'pluck', 'params']

        this.ctx = ctx;
        this.canvas = canvas;

    }

    randomizeWord() {
        const randomIdx = Math.floor(Math.random() * this.words.length)
        return this.words[randomIdx];
    }




    // bounds() {
    //     return {
    //         left: this.x,
    //         right: this.x + WORD_CONSTANTS.WIDTH,
    //         top: this.y,
    //         bottom: this.y + WORD_CONSTANTS.HEIGHT
    //     }
    // }


    // outOfBounds() {
    //     const aboveTheTop = this.y < 0;
    //     const belowTheBottom = this.y + WORD_CONSTANTS.HEIGHT > this.y
    //     return aboveTheTop || belowTheBottom
    // }




    
};


export default Words;

