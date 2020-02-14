/**
 * If you’re wondering why we wrapped that package into our own, we reasoned that it
 * would be best for our consumers’ developer experience.  With reasons such as:
 *
 * - If we want to migrate the underlying nuts and bolts in the future, Twilio products
 *   that depend on this primitive would need to replace all occurrences of
 *   `import … from ‘@reach/dialog’` to `import … from ‘@some-new/package’`.
 *   By wrapping it in `@twilio-paste/dialog-primitive`, this refactor can be avoided.
 *   The only change would be a version bump in the package.json file.
 * - We can more strictly enforce semver and backwards compatibility than some of
 *   our dependencies.
 * - We can control when to provide an update and which versions we whitelist, to
 *   help reduce potential bugs our consumers may face.
 * - We can control which APIs we expose. For example, we may chose to enable or
 *   disable usage of certain undocumented APIs.
 */
export {Dialog, DialogOverlay, DialogContent} from '@reach/dialog';
