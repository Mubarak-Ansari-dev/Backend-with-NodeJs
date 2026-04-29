// MAJOR.MINOR.PATCH
// ^5.2.1

// MAJOR version when you make incompatible API changes,
// MINOR version when you add functionality in a backwards compatible manner, and
// PATCH version when you make backwards compatible bug fixes.
// For example, if you have a package with version 1.2.3, and you make a bug fix, you would update the version to 1.2.4. If you add a new feature that is backwards compatible, you would update the version to 1.3.0. If you make a breaking change, you would update the version to 2.0.0.

// The caret (^) symbol in front of the version number means that npm will install the latest version 
// that is compatible with the specified version. For example, if you have "^5.2.1" in your package.json, 
// npm will install any version that is greater than or equal to 5.2.1 but less than 6.0.0.
//  This allows you to get bug fixes and new features without breaking your code with major changes.      